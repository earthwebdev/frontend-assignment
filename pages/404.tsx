import RootLayout from "@/components/Layouts";

const Custom404 = () => {
  return (
    <>
      <RootLayout>
      <div className="container mx-auto my-6 mt-4 text-center">
          <h1 className="my-4">
            Welcome to <span>Online Store</span>
          </h1>

          <p className="my-4">Sorry , The page you are looking for can't be found</p>

          <p className="my-4">Try checking your URL</p>

          <h2 className="my-4">
            This is a <span style={{ color: "red" }}>404 page</span>
          </h2>
        </div>
      </RootLayout>
    </>
  );
};

export default Custom404;
