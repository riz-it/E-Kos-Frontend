import { MDBCol, MDBContainer } from "mdbreact";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export class PanelComponent extends Component {
  
  render() {
    const Pulau = [
      
        {id: 1, title: 'Pulau Jawa'},
        {id: 2, title: 'Pulau Kalimantan'},
        {id: 3, title:'Pulau Papua'},
        {id: 4, title:'Pulau Sulawesi'},
        {id: 5, title:'Pulau Sumatra'},
        {id: 6, title:'Pulau Alor'},
        {id: 7, title:'Pulau Bacan'},
        {id: 8, title:'Pulau Bali'},
        {id: 9, title:'Pulau Banggai'},
        {id: 10, title:'Pulau Bangka'},
        {id: 12, title:'Pulau Batam'},
        {id: 13, title:'Pulau Belitung'},
        {id: 14, title:'Pulau Lombok'},
        {id: 15, title:'Pulau Madura'},
      
    ]
    const Provinsi = [
      
      {id: 1, title: 'Aceh'},
      {id: 2, title: 'Bali'},
      {id: 3, title:'Banten'},
      {id: 4, title:'Bengkulu'},
      {id: 5, title:'D.I Yogyakarta'},
      {id: 6, title:'Jambi'},
      {id: 7, title:'Jawa Timur'},
    
  ]
  const Kota = [
    {id: 1, title: 'Kota Malang'},
    {id: 1, title: 'Kab Malang'}
  ]
    return (
      <MDBContainer>
        <div className="row justify-content-center">
          <div className="col-lg-12 shadow p-3 mb-5 bg-white rounded info-panel">
            <div className=" isi-panel">
              <div className="row p-4">
                <MDBCol>
                  <select className="browser-default custom-select">
                    <option>Pilih Pulau</option>
                    {Pulau.map((data) => (
                      <option key={data.id}>{data.title}</option>
                    ))}
                  </select>
                </MDBCol>
                <MDBCol>
                  <select className="browser-default custom-select">
                    <option>Pilih Provinsi</option>
                    {Provinsi.map((data) => (
                      <option key={data.id}>{data.title}</option>
                    ))}
                  </select>
                </MDBCol>
                <MDBCol>
                  <select className="browser-default custom-select">
                    <option>Pilih Kota/Kab</option>
                    {Kota.map((data) => (
                      <option key={data.id}>{data.title}</option>
                    ))}
                  </select>
                </MDBCol>
                <MDBCol lg="1">
                  <span
                    style={{
                      cursor: "pointer",
                    }}
                    className="btn-amber tombol form-control"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </MDBCol>
              </div>
            </div>
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default PanelComponent;
