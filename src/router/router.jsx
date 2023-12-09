import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([...PublicRouter, ...PrivetRouter]);

export default router;
