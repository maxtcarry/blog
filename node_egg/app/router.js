 'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  /**  Method	  Path	          Route Name	   Controller.Action
  * GET	       /posts	             posts	      app.controllers.posts.index
  * GET	       /posts/new	         new_post	    app.controllers.posts.new
  * GET        /posts/:id	         post	        app.controllers.posts.show
  * GET	       /posts/:id/edit	   edit_post	  app.controllers.posts.edit
  * POST	     /posts	             posts	      app.controllers.posts.create
  * PUT	       /posts/:id	         post	        app.controllers.posts.update
  * DELETE	   /posts/:id	         post     	  app.controllers.posts.destroy
  */
   router.get('/', controller.home.welcome);
  router.get('/home', controller.home.index);
  router.get('/loginout', controller.home.loginout);
  router.get('/articleList', controller.article.articleList);
  router.post('/login',controller.user.login);
  router.resources('user', '/user', controller.user)//curd
  router.resources('article', '/article', controller.article)//curd
  router.resources('message', '/message', controller.message)//curd
  router.post('/revert',controller.message.revert);
};
