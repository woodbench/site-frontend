import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Blog } from '../pages/blog/Blog';
import { Nosotros } from '../pages/nosotros/Nosotros'
import { Navbar } from '../components/layout/Navbar';
import { BlogEntry } from '../pages/blog/BlogEntry';
import { Footer } from '../components/layout/Footer';
import { TagPage } from '../pages/tags/TagPage';
import { NotFound } from '../pages/not-found/NotFound';
import { CreateEntryPage } from '../pages/crud/CreateEntryPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogEntry />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/create-entry" element={<CreateEntryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};