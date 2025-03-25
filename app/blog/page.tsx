import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostList from "@/components/PostList"; // Import the PostList component

export default function page() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8">
      <Header />
      {/* Use the PostList component */}
      <PostList />
      <Footer />
    </div>
  );
}
