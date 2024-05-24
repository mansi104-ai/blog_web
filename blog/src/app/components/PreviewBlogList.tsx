import { PreviewProvider } from "../../../lib/PreviewProvider";
import BlogList from "./BlogList";

type Props = {
    query: string;
};

export function PreviewBlogList({ query }: Props) {
    const posts = PreviewProvider({ children: query }); // Replace 'your_token_here' with the actual token
    return <BlogList posts={posts} />;
}

export default PreviewBlogList;