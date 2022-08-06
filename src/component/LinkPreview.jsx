import useLinkPreview from "use-link-preview"
import { Box } from "@mui/system"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function LinkPreview({ url }) {
    const { metadata, isLoading, isError } = useLinkPreview(url)
    console.log('>>>', metadata)
    const style = {
        mainCard: {
            width: '450px',
            height: '400px',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            marginTop: '40px'
        },
        error: {
            color: 'red'
        }

    }

    return (
        <>
            {isLoading && <h2> Loading... </h2>}
            {isError && <h3 style={style.error} >Please enter valid url</h3>}

            {
                metadata && (
                    <>
                        <Box  >
                            <Card elevation={6} style={style.mainCard} >
                                <CardMedia
                                    component={'img'}
                                    image={metadata.img}
                                    height="250"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {metadata.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {metadata.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" >
                                        URL:{metadata.requestUrl}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Box>
                    </>
                )
            }
        </>
    )
}

