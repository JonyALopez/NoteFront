import { Route, Routes, Navigate } from 'react-router-dom';
import AllNotes from '../pages/Cart/AllNotes';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import CreateNotes from '../pages/Notes/createNote/CreateNotes';
import EditNotes from '../pages/Notes/editNote/EditNotes';
import Notes from '../pages/Notes/Notes';
import SetPassword from '../pages/SetPassword/SetPassword';

export const DashboardRoute = () => {
    return (
        <Routes>
            <Route path="/CreateNote" element={<CreateNotes />} />
            <Route path="/EditNote" element={<EditNotes />} />
            <Route path="/Notes" element={<Notes />} />
            <Route path="/NewPassword" element={<SetPassword />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/allNotes" element={<AllNotes />} />
        </Routes>
    )
}

