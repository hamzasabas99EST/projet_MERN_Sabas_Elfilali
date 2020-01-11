
import React from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: ['ETUDDIANT', 'ETUDIANTE'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      
      ],
      data: [315, 385]
    }
  ]
}

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
       
  <h1><center>INFORMATION GENERALES SUR EST ESSAOUIRA :</center></h1><br/><br/>

 
  <div className="row">

    
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Salle TP :</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
              
                        5 SALLES

              
             
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-clipboard-list fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">SALLE DES COURS :</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
 
                 21 SALLES
              </div>
            </div>
            <div className="col-auto">
              <i className="  fas fa-tasks "></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-info shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">AMPHITEÂTRE :</div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="h5 mb-0 mr-3 font-weight-bold ">
                    2 AMPHI
                  </div>
                </div>
                <div className="col">
                  <div className="progress progress-sm mr-2">
                    <div className="progress-bar bg-info" role="progressbar"  aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-calendar-times "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Agent de securité :</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
 
                 5 AGENT
              </div>
            </div>
            <div className="col-auto">
              <i className="  fas fa-tasks "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">BIBLIOTHÉQUES :</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
 
                 1 BIBLIO
              </div>
            </div>
            <div className="col-auto">
              <i className="  fas fa-tasks "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">ENSIGNANTS CHERCHEURS :</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
 
                 16 ENSIGNANTS
              </div>
            </div>
            <div className="col-auto">
              <i className="  fas fa-tasks "></i>
            </div>
          </div>
        </div>
      </div>
    </div>




   
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">FEMMES MÉNAGES :</div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                 4 FEMMES
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-comments fa-2x "></i>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Nombres Des Etudians de  l Année 2019/2020',
              fontSize:30
            },
           
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

       
      </div>
    </div>
    );
   }
}