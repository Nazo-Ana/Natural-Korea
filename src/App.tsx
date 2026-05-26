import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import HomePage from './pages/HomePage';

export default function App() {
  useRevealOnScroll();

  return <HomePage />;
}
