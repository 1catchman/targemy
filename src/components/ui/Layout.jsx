import '../../scss/components/layout.scss';
import Comments from './Comments';
import Sidebar from './Siderbar';
import SimilarPosts from './SimilarPosts';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout-wrapper">
        <div className="container flex justify-center w-100">
          <div className="flex-1 flex justify-end">
            <Sidebar />
          </div>
          {children}
          <div className="flex-1">
            <Comments />
          </div>
        </div>
      </div>
      <div className="container">
        <SimilarPosts />
      </div>
    </div>
  );
}
