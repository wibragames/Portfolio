import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

type Post = {
  id: number;
  title: string;
  date: string;
  content: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, title, date, content } = JSON.parse(req.body) as Post;
  const post: Post = { id, title, date, content };
  fs.readFile('blog-posts.json', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    const posts: Post[] = JSON.parse(data.toString());
    posts.push(post);
    fs.writeFile('posts.json', JSON.stringify(posts), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
        return;
      }
      res.status(201).json({ message: 'Blog post created' });
    });
  });
};
