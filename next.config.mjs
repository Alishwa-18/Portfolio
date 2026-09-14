/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // If your repo is NOT named "<your-username>.github.io" (i.e. your site
  // will live at https://<username>.github.io/<repo-name>/ instead of the
  // root), uncomment the two lines below and replace <repo-name>:
  // basePath: "/<repo-name>",
  // assetPrefix: "/<repo-name>/",
};

export default nextConfig;
