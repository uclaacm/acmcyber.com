import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import path from 'path';
import { GetStaticPaths } from 'next';

const POSTS_DIRECTORY = '/data/blog_posts/';

export async function getPostData(name: String) {
    const fullPath = path.join(POSTS_DIRECTORY, `${name}.md`);
    const fileContents = await fsPromises.readFile(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      name,
      contentHtml,
      ...matterResult.data,
    };
  }

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: ['/blog/2023-01-02-pycjail'], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({ params }) {

    async function getPostData(name: String) {
        const fs = require('fs');
        const fullPath = path.join(process.cwd() + POSTS_DIRECTORY, `${name}.md`);
        const fileContents = await fs.readFileSync(fullPath, 'utf8');
      
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        
      
        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();
      
        // Combine the data with the id and contentHtml
        return {
          name,
          contentHtml,
          ...matterResult.data,
        };
    }
    
    const postData = await getPostData("2023-01-02-pycjail");
  
    return {
      props: {
        postData,
      },
    };
  }

export default function Post({ postData }) {
    return (
      <div class="bg-gray-100">
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <article class="prose lg:prose-xl">
          <h1 class='prose '>Test</h1>
          <div class="prose" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> 
        </article>
      </div>
    );
  }

  // TODO
  // uses dangerouslySetInnerHTML, might switch to something else