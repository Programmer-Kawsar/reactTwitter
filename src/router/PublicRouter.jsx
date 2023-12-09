import Layout from "../components/layouts/Layout";
import Authpage from "../pages/authpage/Authpage";

const PublicRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Authpage />,
      },
    ],
  },
];

export default PublicRouter;
