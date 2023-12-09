import Layout from "../components/layouts/Layout";
import Homepage from "../pages/homepage/Homepage";

const PrivetRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Homepage />,
      },
    ],
  },
];

export default PrivetRouter;
