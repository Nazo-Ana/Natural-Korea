import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  useRevealOnScroll();

  return <AppRoutes />;
}
