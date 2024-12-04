# Nextjs - MUI - Prisma - Template

This is a Nextjs template with MUI, Prisma, and TypeScript.
Authentication is handled with cookies.

## Getting Started

1. Clone the repository
   with http:
   ```bash
    git clone https://github.com/stefvannieuwenhove/nextjs-cookie-mui-prisma-template.git
   ```
   or ssh:
   ```bash
    git clone git@github.com:stefvannieuwenhove/nextjs-cookie-mui-prisma-template.git
   ```
2. Install dependencies
   ```bash
    npm install or yarn install
   ```
3. Create a .env file in the root directory and add the following variables:
   ```bash
    DATABASE_URL=postgresql://postgres:example@localhost:5432/postgres
    SESSION_SECRET=example
    TOKEN_NAME=example
    SALT_ROUNDS=10
   ```
4. Create a secret key for the JWT token encryption and use it as `SESSION_SECRET` in the .env file
   ```bash
    openssl rand -base64 32
   ```
5. Run the development server
   ```bash
    npm run dev or yarn dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [MUI](https://mui.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [JWT](https://github.com/panva/jose)
- [bcrypt-ts](https://www.npmjs.com/package/bcrypt-ts)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
