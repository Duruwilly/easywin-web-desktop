import { APP_ROUTES } from "../constants/app-routes";
import { HomePage, NewsPage, ProfilePage, PromotionPage } from "../pages";

export const routes: Array<{ path: string; element: React.FC }> = [
  { path: APP_ROUTES.HOME, element: HomePage },
  { path: APP_ROUTES.NEWS, element: NewsPage },
  { path: APP_ROUTES.PROMOTIONS, element: PromotionPage },
];

export const profileRoutes: Array<{ path: string; element: React.FC }> = [
  { path: APP_ROUTES.PROFILE, element: ProfilePage },
];
