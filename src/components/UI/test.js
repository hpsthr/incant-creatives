



const { Button, makeStyles, Card, CardActionArea,
      CardActions, CardContent, CardMedia, Typography, Box } = MaterialUI;
const { useState } = React;

//-------------- card slider styles ---------------
const useStyles = makeStyles({
  sideColumn: {
    height: '264px',
    position: 'relative',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      width: '8.8vw',
      height: '120%',
      background: 'white',
      top: '-10%',
      left: 0,
      zIndex: 3,
    },
    '&:after': {
      left: 'auto',
      width: '9.2vw',
      right: 0,
    }
  },
  cardSlider: {
    position: 'relative',
    height: '264px',
    maxWidth: '82vw',
    margin: '0 auto',
  },
  cardWrapper: {
    display: 'flex',
    position: 'absolute',
    left: '0',
    transition: 'transform 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  },
  button: {
    display: 'block',
    position: 'absolute',
    border: 'none',
    borderRadius: '50%',
    height: '4vw',
    width: '4vw',
    zIndex: '4',
    top: '25%',
    backgroundColor: '#dbdee0',
    color: 'rgb(121, 111, 111)',
    '&:focus': {
      outline: 'none'
    },
    '&:active': {
      transform: 'translateY(1px)',
      filter: 'saturate(150%)'
    },
    '&:hover': {
      borderColor: '#f3f3f3',
      backgroundColor: '#f3f3f3',
      cursor: 'pointer',
    }
  },
  buttonRight: {
    boxShadow: '1px 1px 4px 1px rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0,     0, 0.19)',
    right: '-2.5%',
  },
  buttonLeft: {
    boxShadow: '-1px 1px 4px 1px rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0,       0, 0.19)',
    left: '-3%'
  },
  noTextOverflow: {
    display: 'block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
});

//--------------------------------------------

const ExampleCard = () => {
  const classes = useStyles();
  
  return (
    <Card style={{width: '20vw', height: '200px', marginRight: '0.5vw', backgroundColor: '#dbdee0' }}>
      <CardActionArea>
        <CardContent>
         <Typography component="div">
            <Box textAlign="left" fontFamily="cursive" m={1}>
             Title
            </Box>
            <Box textAlign="left" fontFamily="Monospace" m={1}>
              Sed ut perspiciatis unde. 
            </Box>
          </Typography>
         </CardContent>
        </CardActionArea>
        <CardActions style={{margin: '0 auto'}}>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Like
          </Button>
      </CardActions>
    </Card>
  )
}
//--------------------------------------------

const CardSlider = () => {
  const classes = useStyles();
  const [card, setCard] = useState(0);
  const cards = new Array(10).fill(0);
  const visLeft = card === 0 ? "hidden" : "visible";
  const visRight = card === cards.length-4 ? "hidden" : "visible";
  
  return (
    <div className={classes.sideColumn}>
      <div className={classes.cardSlider}>
        <button 
        onClick={() => setCard(card+1)} 
        className={classNames(classes.buttonRight, classes.button)}
        style={{visibility: visRight}}
      >
        {'>'}
      </button>
      <button 
        onClick={() => setCard(card-1)} 
        className={classNames(classes.buttonLeft, classes.button)}
        style={{visibility: visLeft}}
      >
        {'<'}
      </button>
        <div className={classes.cardWrapper}
          style={{'transform': `translateX(-${card*(100/cards.length)}%`}}>
          {cards.map((item,index) => (
            <ExampleCard key={index}/>
          ))}
        </div>
      </div>
    </div>
    
  )
}

//--------------------------

const App = () => {
  return (
    <div>
      <div style={{marginBottom: '50px'}}/>
      <CardSlider/>
    </div>
  )
}

//--------------------------

ReactDOM.render(<App/>,
    document.getElementById("root"))