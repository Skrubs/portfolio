import { Dialog, DialogContent, Avatar, Button, IconButton, Typography, Box } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const UserProfileModal = ({ open, handleClose, user }) => {
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="user-profile-modal">
            <DialogContent sx={{ position: 'relative', padding: 4 }}>
                <IconButton
                    onClick={handleClose}
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                    <CloseIcon />
                </IconButton>
                <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
                    <Avatar

                        sx={{ width: 96, height: 96, marginBottom: 2 }}
                    />
                    <Typography variant="h6" component="h2">Name goes here
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                    Job Title goes here
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={4}>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Edit Profile
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                    >
                        Logout
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>

    );
};

export default UserProfileModal;