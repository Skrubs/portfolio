import React, { useState } from 'react';
import { Box, Button, Typography, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const UserSettingsModal = () => {
    const [selectedSetting, setSelectedSetting] = useState('password');
    const [projects, setProjects] = useState([{ name: '' }]);

    const settings = [
        { text: 'Edit Password', value: 'password' },
        { text: 'Edit Country', value: 'country' },
        { text: 'Edit Projects', value: 'projects' },
        { text: 'Edit Theme', value: 'theme' },
    ];

    const handleAddProject = () => {
        setProjects([...projects, { name: '' }]);
    };

    const handleProjectChange = (index, event) => {
        const newProjects = [...projects];
        newProjects[index].name = event.target.value;
        setProjects(newProjects);
    };

    const renderContent = () => {
        switch (selectedSetting) {
            case 'password':
                return (
                    <Box>
                        <Typography variant="h6">Edit Password</Typography>
                        <TextField label="Current Password" type="password" fullWidth margin="normal" />
                        <TextField label="New Password" type="password" fullWidth margin="normal" />
                        <TextField label="Confirm New Password" type="password" fullWidth margin="normal" />
                    </Box>
                );
            case 'country':
                return (
                    <Box>
                        <Typography variant="h6">Edit Country</Typography>
                        <TextField label="Country" fullWidth margin="normal" />
                    </Box>
                );
            case 'projects':
                return (
                    <Box>
                        <Typography variant="h6">Edit Projects</Typography>
                        {projects.map((project, index) => (
                            <TextField
                                key={index}
                                label={`Project ${index + 1}`}
                                value={project.name}
                                onChange={(e) => handleProjectChange(index, e)}
                                fullWidth
                                margin="normal"
                            />
                        ))}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <IconButton onClick={handleAddProject} color="primary">
                                <AddIcon />
                            </IconButton>
                        </Box>
                    </Box>
                );
            case 'theme':
                return (
                    <Box>
                        <Typography variant="h6">Edit Theme</Typography>
                        <TextField label="Theme" fullWidth margin="normal" />
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: { xs: 2, md: 4 },
                outline: 'none',
                borderRadius: 1,
                width: { xs: '40%', md: '50%' },
                marginLeft: { xs: '35%', md: '30%' },
                marginTop: '50%',
                mt: 10,
                overflow: 'auto',
                typography: { xs: 'body2', md: 'body1' },
            }}
        >
            <Box
                sx={{
                    width: { xs: '100%', md: '30%' },
                    bgcolor: 'grey.200',
                    borderRadius: 1,
                    mr: { md: 2 },
                    mb: { xs: 2, md: 0 },
                    overflow: 'auto',
                }}
            >
                <List>
                    {settings.map((setting) => (
                        <ListItem button key={setting.value} onClick={() => setSelectedSetting(setting.value)}>
                            <ListItemText primary={setting.text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box
                sx={{
                    width: { xs: '100%', md: '70%' },
                    bgcolor: 'white',
                    borderRadius: 1,
                    p: 2,
                    boxShadow: 1,
                    overflow: 'auto',
                }}
            >
                {renderContent()}
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained">
                        Save
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default UserSettingsModal;
