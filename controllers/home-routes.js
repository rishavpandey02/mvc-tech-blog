const router = require('express').Router();
const {User, Post } = require('../models');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            order:[['id', 'DESC']], 
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        })


        const posts = dbPostData.map((post) => post.get({ plain: true}));
        console.log(posts)

        res.render('homepage', 
        { posts,
          loggedIn: req.session.loggedIn,
          username: req.session.username,
          userId: req.session.userId });
        } catch (err) {
            res.status(500).json(err);
        }
    });

    
router.get('/post/:id', async (req, res) => {
    try{
        const dbPostData = await Post.findOne({
            where: {id: req.params.id},
            attributes: ['id', 'content', 'title', 'created_at'],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment', 'postId', 'userId', 'created_at'],
                    include: {
                      model: User,
                      attributes: ['username'],
                    },
                  },
                  {
                    model: User,
                    attributes: ['username'],
                  },
            ],
        });
        if (dbPostData) {
            const post = dbPostData.get({ plain: true });
            console.log(post);
            res.render('single-post', { post, loggedIn: req.session.loggedIn, username: req.session.username, })  
        } else {
            res.status(404).json({ message: "This id has no post."});
            return;
        }
    } catch (err) {
        res.status(500).json(err);
    }   
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll({
        where: {
          userId: req.session.userId,
        },
      });

      const authoredPosts = postData.map((post) => post.get({ plain: true }));

      res.render('dashboard', {
        authoredPosts,
        logged_in: req.session.logged_in,
      })
    } catch (err) {
      res.status(500).json(err);
      console.error(err);
    }
  });

  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
})

  //dispay make post page
  router.get('/post', withAuth, async (req, res) => {
    try {
      res.render('makepost', {
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //display update post page
  router.get('/updatepost/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id)
      if(!postData) {
        return res.status(404).render('404');
      } 
      const post = postData.get({ plain: true });
      res.render('updatepost', {
        post,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



    


module.exports = router;


