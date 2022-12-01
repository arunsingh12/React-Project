import React from 'react'
import '../Reviews/Reviews.css'
import StarIcon from '@mui/icons-material/Star';

export const ReviewCard = (props) => {
  return (
    <>
        <div className="col-sm-3 pb-5">
            <div className="card">
              <span className='pl-3 pt-3'> <StarIcon style={{'color':'goldenrod'}}/><StarIcon style={{'color':'goldenrod'}}/><StarIcon style={{'color':'goldenrod'}}/><StarIcon style={{'color':'goldenrod'}}/><StarIcon style={{'color':'goldenrod'}}/> </span>
                <div className="card-body">
                    <div className="card-title"><strong>{props.heading}</strong></div>
                    <div className="card-subtitle">{props.para}</div>
                    <div className="text pt-5 text-muted">{props.author}</div>
                </div>
            </div>
        </div>
    </>
  )
}
