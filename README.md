# The Wild Oasis

A modern, full-featured hotel and cabin management system built with React and Supabase. The Wild Oasis is a comprehensive web application designed to streamline the operations of boutique hotels and cabin resorts, providing staff with powerful tools for booking management, guest check-in/check-out, cabin administration, and business analytics.

## 🌲 Overview

The Wild Oasis is a professional-grade management platform that enables hotel staff to efficiently handle all aspects of their business operations. From managing cabin inventory and guest bookings to analyzing revenue trends and handling check-in/check-out processes, this application provides a complete solution for modern hospitality businesses.

## ✨ Features

### 📊 Dashboard & Analytics

- **Real-time Dashboard**: Comprehensive overview of hotel operations with key metrics
- **Sales Chart**: Visual representation of revenue trends over customizable date ranges
- **Duration Analytics**: Analysis of average stay duration patterns
- **Today's Activity**: Quick view of current check-ins, check-outs, and booking status
- **Statistics Cards**: Display of total bookings, confirmed stays, occupancy rates, and revenue data

### 🏠 Cabin Management

- **Cabin Inventory**: Complete listing of all available cabins with detailed information
- **Add/Edit Cabins**: Create and update cabin details including name, capacity, price, and images
- **Cabin Operations**: Mark cabins as available/unavailable
- **Image Upload**: Support for cabin image uploads and management
- **Filtering & Sorting**: Advanced filtering and sorting capabilities for cabin browsing

### 📅 Booking Management

- **Booking List**: Comprehensive view of all bookings with status tracking
- **Detailed Booking Info**: View full booking details including guest information, dates, and pricing
- **Booking Status**: Track booking status (unconfirmed, checked-in, checked-out)
- **Advanced Filtering**: Filter bookings by status, date range, and guest information
- **Booking Operations**: Update, delete, and manage booking states
- **Pagination**: Efficient pagination for handling large booking datasets

### ✅ Check-In & Check-Out

- **Today's Activity Board**: Real-time view of guests checking in and checking out today
- **Quick Check-In**: Streamlined check-in process with payment confirmation
- **Breakfast Add-On**: Option to add breakfast service during check-in with dynamic pricing
- **Payment Tracking**: Confirm payment status before check-in
- **Check-Out Management**: Process guest departures and settle payments

### 👥 Guest & User Management

- **Guest Database**: Complete guest information including contact details and nationality
- **User Profiles**: Staff user management with role-based access control
- **User Account Settings**: Personal profile management and preferences
- **Password Management**: Secure password update functionality
- **User Data Updates**: Modify user information (name, email, avatar)

### 🔐 Authentication & Authorization

- **Secure Login**: Email and password-based authentication
- **User Registration**: New user signup with validation
- **Session Management**: Persistent authentication with JWT tokens
- **Protected Routes**: Role-based access control ensuring only authorized users access features
- **Auto-Logout**: Automatic session termination for security

### ⚙️ Settings & Configuration

- **Hotel Settings**: Manage hotel-wide configurations
- **Breakfast Pricing**: Set and update breakfast service pricing
- **Minimum Night Stays**: Configure minimum booking duration policies
- **Maximum Guests**: Set maximum guest capacity per booking

### 🎨 User Interface

- **Dark/Light Theme**: Toggle between dark and light modes with persistent preferences
- **Responsive Design**: Mobile-friendly interface that works across all devices
- **Intuitive Navigation**: Clean sidebar navigation with clear menu structure
- **Modal Components**: Elegant modals for forms and confirmations
- **Toast Notifications**: User-friendly notifications for actions and errors
- **Loading States**: Visual feedback during data fetching operations

### 📱 Additional Features

- **Error Boundaries**: Graceful error handling with fallback UI
- **Empty States**: Helpful messaging when no data is available
- **Form Validation**: Comprehensive form validation with error messages
- **Search & Filter**: Advanced search and filtering across the application
- **Data Export**: Support for data viewing and management

## 🛠️ Tech Stack

### Frontend Framework & Libraries

- **React 18.2.0**: Modern React with hooks and functional components
- **React Router v6**: Client-side routing and navigation
- **React Hook Form 7.72.1**: Efficient form state management
- **Styled Components 6.3.12**: CSS-in-JS styling solution

### State Management & Data Fetching

- **TanStack React Query 4.44.0**: Server state management and data synchronization
- **TanStack React Query DevTools**: Development tools for debugging queries
- **React Context API**: For global theme state management

### Backend & Database

- **Supabase 2.101.1**: Backend-as-a-Service with PostgreSQL database
- **Supabase Auth**: Authentication system integration

### UI & UX

- **React Icons 5.6.0**: Comprehensive icon library
- **React Hot Toast 2.6.0**: Toast notifications
- **Recharts 2.15.4**: Data visualization and charts
- **React Error Boundary 6.1.1**: Error handling component

### Build Tools & Development

- **Vite 4.4.5**: Next-generation frontend build tool
- **Vite Plugin React**: React Fast Refresh integration
- **ESLint 8.57.1**: Code quality and consistency checking
- **ESLint Config React App**: React-specific linting rules

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Supabase account and credentials

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd 17-the-wild-oasis
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory with your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will open automatically at `http://localhost:5173`

## 🚀 Available Scripts

```bash
# Start development server with automatic browser opening
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## 📁 Project Structure

```
src/
├── features/              # Feature-specific modules
│   ├── authentication/   # Login, signup, user management
│   ├── bookings/         # Booking management and operations
│   ├── cabins/           # Cabin inventory management
│   ├── check-in-out/     # Check-in/check-out operations
│   ├── dashboard/        # Analytics and dashboard components
│   └── settings/         # Application settings
├── pages/                # Page components (routes)
├── services/             # API services and database queries
│   ├── apiAuth.js       # Authentication API calls
│   ├── apiBookings.js   # Booking-related queries
│   ├── apiCabins.js     # Cabin management queries
│   ├── apiSettings.js   # Settings queries
│   └── supabase.js      # Supabase client configuration
├── ui/                  # Reusable UI components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions and constants
├── styles/              # Global styles
├── context/             # React Context providers (Theme)
└── App.jsx             # Main app component with routing
```

## 🔑 Key Components

### Pages

- **Dashboard**: Main analytics and overview page
- **Bookings**: List and manage all bookings
- **Booking Detail**: View individual booking information
- **Cabins**: Manage cabin inventory
- **Check-in**: Guest check-in process
- **Account**: User profile management
- **Settings**: Application-wide settings
- **Users**: Staff user management

### Features

- **Authentication Module**: Complete auth workflow
- **Booking Operations**: CRUD operations for bookings
- **Cabin Management**: Full cabin lifecycle management
- **Check-in/Check-out System**: Guest arrival and departure handling
- **Dashboard Analytics**: Real-time data visualization

### UI Components

- Button variants (Primary, Secondary, Icon, Text)
- Forms with validation
- Tables with sorting and pagination
- Modals and confirmations
- Toast notifications
- Spinners and loading states

## 🔄 Data Flow

1. **User Authentication**: Users log in through the LoginForm
2. **Protected Routes**: ProtectedRoute wrapper ensures only authenticated users access features
3. **Data Fetching**: React Query handles server state management
4. **Component Updates**: Styled Components provide reactive styling
5. **Real-time Sync**: Supabase keeps data synchronized across the application

## 🎯 Use Cases

### For Hotel Managers

- Monitor daily operations and revenue
- Analyze booking trends and guest patterns
- Configure hotel settings and pricing

### For Staff

- Check guests in and out efficiently
- Manage cabin availability and maintenance
- Access guest information and booking details
- Handle payment processing

### For Administrators

- User account management
- System-wide configuration
- Data backup and management

## 🌐 Deployment

The application is deployed and available on multiple platforms:

### Vercel

- **Live URL**: https://wild-oasis-bookings.vercel.app
- Configuration file: `vercel.json`
- Automatic deployments from git

### Netlify

- **Live URL**: https://wild-oasis-suites.netlify.app
- Configuration file: `public/netlify.toml`
- Support for serverless functions

**Demo Credentials:**

- Email: `ahmed@example.com`
- Password: `pass0239`

## 🔒 Security Features

- **Authentication**: Supabase Auth with email/password
- **Authorization**: Role-based access control
- **Protected Routes**: Restricted access to authenticated users
- **Secure Sessions**: JWT token management
- **Environment Variables**: Sensitive credentials in `.env` file

## 📝 Development Guidelines

### Code Quality

- ESLint configuration enforces consistent code style
- React best practices for hooks and component composition
- Functional components with custom hooks pattern

### State Management

- React Query for server state
- Context API for client state (Theme)
- Local storage for persistent preferences

### Error Handling

- Error Boundary component for graceful error UI
- Toast notifications for user feedback
- Try-catch in API services

## 🎨 Theming

The application supports dark and light modes:

- Stored in localStorage for persistence
- CSS class-based theme switching
- Styled Components for theme-aware styling

## 🤝 Contributing

Guidelines for contributing to the project:

1. Create feature branches from main
2. Write meaningful commit messages
3. Ensure code passes ESLint checks
4. Test thoroughly before submitting PRs

## 📄 License

This project is part of a learning curriculum and is designed for educational purposes.

## 🆘 Support & Troubleshooting

### Common Issues

**Build Errors**

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

**Database Connection Issues**

- Verify Supabase credentials in environment variables
- Check internet connection to Supabase servers

**Authentication Problems**

- Clear browser cache and local storage
- Verify user exists in Supabase Auth

## 🚀 Future Enhancements

Potential features for future development:

- SMS/Email notifications
- Advanced reporting and exports
- Multi-language support
- Payment gateway integration
- Review and rating system
- Loyalty program management

---

**Version**: 0.0.0  
**Last Updated**: April 2026  
**Built with ❤️ using React and Supabase**
