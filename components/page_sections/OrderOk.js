import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Loader from "react-loader-spinner";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Divider } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin:'auto'
      },
    modal: {
      
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    paper: {width:'350px',
    overflow: 'scroll',
    maxHeight:'90vh',
    background: 'rgb(255,255,255)',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1, 1, 1),
    },
  }));

function OrderOk(props) {
    const classes = useStyles();




    return (
        <div>
                  <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.orderOk}
        onClose={props.close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.orderOk}>
          <div className={classes.paper}>
          
<div className="container-fluid">
  <div className="row">
  <div className="col-12">
          <Card className={classes.root}>
          <CardContent className='order_resume'>
              <h4>Ordine effetuato con successo</h4>
              <Button   variant="contained" color="primary" href="/">Torna al menu</Button>

      
        
      
        
          
           </CardContent></Card></div>
       
  </div>
</div>




      
          </div>
        </Fade>
      </Modal>
            
        </div>
    );
}

export default OrderOk;