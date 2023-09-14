// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { Header, Footer } from "./components";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With MDX</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="flex flex-col h-screen ">
        <ErrorBoundary>
          <Header />
          <Suspense>
            <main class="flex-grow">
              <Routes>
                <FileRoutes />
              </Routes>
            </main>
          </Suspense>
          <Footer />
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
