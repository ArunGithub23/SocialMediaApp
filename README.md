# SocialMediaApp


errors:

1. const newPost=new PostModel(req.body);
                  ^
TypeError: PostModel is not a constructor

solution :the problem was that model was not exported properly

2.
