# Contributing Guidelines

Thank you for considering contributing to Silva Automation's landing page.

## Development Workflow

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sav2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Follow the project structure guidelines in README.md
   - Ensure all TypeScript types are properly defined
   - Update content in `src/constants/site-content.ts`

5. **Test your changes**
   ```bash
   npm run dev
   ```

6. **Lint and format**
   ```bash
   npm run lint:fix
   npm run format
   ```

7. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

   Use conventional commits:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

8. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

## Code Style

- Use TypeScript for all new code
- Follow the existing folder structure
- Use path aliases (`@/`) for imports
- Write clear, descriptive variable and function names
- Add JSDoc comments for complex functions
- Keep components small and focused

## Project Structure

See [README.md](README.md) for detailed project structure documentation.

## Questions?

Contact: contact@silvaautomation.com
