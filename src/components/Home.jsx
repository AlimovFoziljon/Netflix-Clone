import { ExpandMore } from "@mui/icons-material";
import { Typography } from "@mui/material";
import NetflixTv from "../assets/tv.png"
import MainCover from "../assets/maincover.png"
import Everywhere from "../assets/pngegg.png"
import Kids from "../assets/kids.png"
import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const Home = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="home">
            <div className="home-hero">
                <div className="home-hero-content">
                    <Typography variant="h3" fontWeight={'800'}>Unlimited movies, TV shows, and more</Typography>
                    <Typography variant="h5">Watch anywhere. Cancel anytime.</Typography>
                    <Typography fontSize='20px' variant="subtitle1">Ready to watch? Enter your email to create or restart your membership.</Typography>
                    <div className="down">
                        <a href="#home-page">
                            <ExpandMore />
                        </a>
                    </div>
                </div>    
            </div>
            <div className="home-page" id="home-page">
                <div className="home-description">
                    <Typography variant="h3" fontWeight={'800'}>Enjoy on your TV</Typography>
                    <Typography fontSize='22px' variant="subtitle2" lineHeight={'30px'}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Typography>
                </div>
                <img className="home-image" src={NetflixTv} alt="tv" />
            </div>
            <div className="home-page">
                <img className="home-image" src={MainCover} alt="tv" />
                <div className="home-description">
                    <Typography variant="h3" fontWeight={'800'}>Download your shows to watch offline</Typography>
                    <Typography fontSize='22px' variant="subtitle2" lineHeight={'30px'}>Save your favorites easily and always have something to watch.</Typography>
                </div>
            </div>
            <div className="home-page">
                <div className="home-description">
                    <Typography variant="h3" fontWeight={'800'}>Watch everywhere</Typography>
                    <Typography fontSize='22px' variant="subtitle2" lineHeight={'30px'}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Typography>
                </div>
                <img className="home-image" src={Everywhere} alt="tv" />
            </div>
            <div className="home-page">
                <img className="home-image" src={Kids} alt="tv" />
                <div className="home-description">
                    <Typography variant="h3" fontWeight={'800'}>Watch everywhere</Typography>
                    <Typography fontSize='22px' variant="subtitle2" lineHeight={'30px'}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Typography>
                </div>
            </div>
            <div className="home-page">
                <div className="home-questions">
                    <Typography textAlign={'center'} variant="h3" fontWeight={800}>Frequently Asked Questions</Typography>
                    <div className="accordions">
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{
                            backgroundColor: '#2D2D2D',
                            color: '#fff',
                            padding: '10px',
                        }}>
                            <AccordionSummary
                            expandIcon={<a><ExpandMore /></a>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography variant="h5">What is Netflix?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography variant="h5">
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br /> <br />
        You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{
                            backgroundColor: '#2D2D2D',
                            color: '#fff',
                            padding: '10px',
                        }}>
                            <AccordionSummary
                            expandIcon={<a><ExpandMore /></a>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography variant="h5">How much does Netflix cost?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography variant="h5">
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{
                            backgroundColor: '#2D2D2D',
                            color: '#fff',
                            padding: '10px',
                        }}>
                            <AccordionSummary
                            expandIcon={<a><ExpandMore /></a>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography variant="h5">Where can I watch?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography variant="h5">
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /> <br />
You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywher
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{
                            backgroundColor: '#2D2D2D',
                            color: '#fff',
                            padding: '10px',
                        }}>
                            <AccordionSummary
                            expandIcon={<a><ExpandMore /></a>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography variant="h5">How do I cancel?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography variant="h5">
                            Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{
                            backgroundColor: '#2D2D2D',
                            color: '#fff',
                            padding: '10px',
                        }}>
                            <AccordionSummary
                            expandIcon={<a><ExpandMore /></a>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography variant="h5">What can I watch on Netflix?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography variant="h5">
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={{
                            backgroundColor: '#2D2D2D',
                            color: '#fff',
                            padding: '10px',
                        }}>
                            <AccordionSummary
                            expandIcon={<a><ExpandMore /></a>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography variant="h5">Is Netflix good for kids?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography variant="h5">
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. <br /> <br />
Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} sx={{
                            backgroundColor: '#2D2D2D',
                            color: '#fff',
                            padding: '10px',
                        }}>
                            <AccordionSummary
                            expandIcon={<a><ExpandMore /></a>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography variant="h5">Why am I seeing this language?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography variant="h5">
                            Your browser preferences determine the language shown here.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;