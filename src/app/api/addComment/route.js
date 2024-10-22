
import connectDb from '../../../../middleware/mongoose';
import Blogs from '../../../../models/Blogs';

export  async function POST(req, res) {
    try {
      const { blogCode, name, content } =await  req.json();
      await connectDb();
      const blog = await Blogs.findOne({ "blogCode":blogCode });

      if (!blog) {
        return Response.json({ message: 'Blog not found' });
      }

      // Create the new comment
      const newComment = {
        authorame:"USER",
        content,
      };

      // Push the new comment into the comments array
      blog.comments.push(newComment);

      // Save the updated blog
      await blog.save();

      return Response.json({ message: 'Comment added successfully', blog });
    } catch (error) {
      console.error(error);
      return Response.json({ message: 'Internal server error' });
    }

}
