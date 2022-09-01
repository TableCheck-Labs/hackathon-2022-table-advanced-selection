import { Navigate, Route, Routes } from 'react-router-dom';

import { AppLayout } from 'layouts/AppLayout';
import { BookingConfirmationPage } from 'pages/BookingConfirmationPage/BookingConfirmationPage';
import { PaymentConfirmationPage } from 'pages/PaymentConfirmationPage/PaymentConfirmationPage';
import { TableSelectionPage } from 'pages/TableSelectionPage/TableSelectionPage';

function HomePageRedirect(): JSX.Element {
  return (
    <Navigate
      to="/booking-confirmation"
      replace
    />
  );
}

export function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="booking-confirmation"
          element={<BookingConfirmationPage />}
        />
        <Route
          path="table-selection"
          element={<TableSelectionPage />}
        />
        <Route
          path="payment-confirmation"
          element={<PaymentConfirmationPage />}
        />

        <Route
          path="*"
          element={<HomePageRedirect />}
        />
      </Route>
    </Routes>
  );
}
