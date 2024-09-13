import { UsersCreatePage } from "./create/users.create.page";
import { UsersDetailPage } from "./detail/users.detail.page";
import { UsersListPage } from "./list/users.list.page";
import { UsersUpdatePage } from "./update/users.update.page";

export const userRoutes = [
  { path: "/users", element: <UsersListPage /> },
  { path: "/users/create", element: <UsersCreatePage /> },
  { path: "/users/:id/detail", element: <UsersDetailPage /> },
  { path: "/users/:id/update", element: <UsersUpdatePage /> },
];
