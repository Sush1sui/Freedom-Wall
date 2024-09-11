import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

type OutlinedCardProps = {
    title: string;
    body: string;
};

export default function OutlinedCard({ title, body }: OutlinedCardProps) {
    return (
        <Box
            sx={{
                width: 275, // Fixed width
                height: 200, // Fixed height
            }}
        >
            <Card variant="outlined" sx={{ height: "100%", paddingBottom: 2 }}>
                <CardContent sx={{ height: "80%" }}>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        gutterBottom
                        sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                        {new Date().toLocaleDateString()}
                        {/* Format the date */}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 3, // Show 3 lines of body text
                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {body}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        justifyContent: "start",
                    }}
                >
                    <Link to="login">
                        <Button size="small">View</Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    );
}
