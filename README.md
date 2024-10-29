# Web3Access

**Web3Access** is a Web3 project showcasing user authentication, onboarding, and wallet connection.
The app leverages **Web3Auth** for authentication, along with **MetaMask**, **Google**, **LinkedIn**, or using your email for wallet connection.
New users go through a mandatory onboarding process before accessing a personal dashboard with account details.
Future enhancements may include additional functionality interacting with blockchain.

## Features

- **Web3Auth Authentication**: Secure login and wallet connection via Web3Auth.
- **MetaMask Wallet**: Seamless integration with MetaMask for managing users’ web3 wallets.
- **Onboarding Process**: New users must complete an onboarding procedure before accessing the dashboard.
- **Private Dashboard**: A personalized space where users can view information about themselves after logging in.
- **Blockchain Interaction**: (Planned) Additional functionality to interact with blockchain.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Authentication**: [Web3Auth](https://web3auth.io/)
- **Wallet Connection**: [Wagmi](https://wagmi.sh/)
- **Routing**: [TanStack Router](https://tanstack.com/router/latest)
- **UI Components**: [Chakra UI](https://chakra-ui.com/)
- **Data Fetching**: [React TanStack Query](https://tanstack.com/query/latest)
- **State Management**: [Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)

## Demo

You can open demo on [Render](https://web3access-frontend.onrender.com/).

### Prerequisites

- Node.js (v16+)
- Yarn or npm

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/alexgerasimov73/web3access-frontend.git
```

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open http://localhost:5173 with your browser to see the application.

## API Integration

This frontend is integrated with the backend API, which is hosted on Render and can be accessed at: [web3access app API](https://web3access-backend.onrender.com). The backend [repo](https://github.com/alexgerasimov73/web3access-backend)

## Styling

The application is styled using [Sass](https://sass-lang.com/) and leverages [Chakra UI](https://chakra-ui.com/) for component styling.

## Deployment

The backend is hosted on [Render](https://render.com/). The database is hosted on [MongoDB](https://www.mongodb.com/).

## Future Enhancements

- **Blockchain Interaction**: Integration with blockchain for real-time data or contract interaction.
- **KYC/AML Integration**: Although not implemented, the onboarding process includes information on how to handle KYC/AML with recommended tools like [Onfido](https://onfido.com/).
- **Refactoring the code base**: It needs to get rid of TODO's, optimize, and refactor code out where it's necessary.
- **Test covering**: The application will be covered with tests.

## Contributing

If you have suggestions for improvements or want to contribute to the project, feel free to fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

**Free Software, Hell Yeah!**
