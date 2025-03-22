import { Box } from "@mui/material";

export const BannerOverlay = () => {
      
    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "500px",
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    pointerEvents: "none",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "500px",
                    background: 'linear-gradient(to left, rgba(0, 0, 0, 0.7) 0%, transparent 100%)',
                    pointerEvents: "none",
                }}
            />
        </>
    );
}