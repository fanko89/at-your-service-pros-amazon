import React from 'react';
import './MaintenanceItems.css';
import remeHaloBulb from './img/reme_bulb.jpg';
import remeHaloBulbLED from './img/reme_bulb_led.jpg';
import cleanComfortFilter14x25 from './img/14x25x4.jpg';
import cleanComfortFilter16x25 from './img/16x25x4.jpg';
import cleanComfortFilter20x25 from './img/20x25x4.jpg';
import cleanComfortFilter20x20 from './img/20x20x4.jpg';
import filter25x25 from './img/25x25x4.jpg';
import aprilAireCartridge from './img/600_700_cart_pan.jpg';
import aprilAire210 from './img/AprilAire210.jpg';
import aprilAire410 from './img/AprilAire410.jpg';


const MaintenanceItems = () => {
  const items = [

    {
      name: 'Clean Comfort 14x25x4 Filter',
      description: '14x25x4 Clean Comfort MERV 11 is a high-efficiency filter for Clean Comfort HVAC systems.',
      image: cleanComfortFilter16x25, 
      affiliateLinkSingle: 'https://amzn.to/3zKKZgC',
      affiliateLinkBundle: 'https://amzn.to/3Y0iCCX',
    },
    {
      name: 'Clean Comfort 16x25x4 Filter',
      description: '16x25x4 Clean Comfort MRV11 is a High-efficiency air filter, suitable for Clean Comfort HVAC systems.',
      image: cleanComfortFilter16x25, 
      affiliateLinkSingle: 'https://amzn.to/3zInp3Z',
      affiliateLinkBundle: 'https://amzn.to/3ZRTS2e',
    },
    {
      name: 'Clean Comfort 20x25x4 Filter',
      description: '20x25x4 Clean Comfort MRV11 filter provides superior air filtration, ideal for enhancing indoor air quality.',
      image: cleanComfortFilter20x25, 
      affiliateLinkSingle: 'https://amzn.to/47Gqk9Q',
      affiliateLinkBundle: 'https://amzn.to/4gywkp8',
    },
   
    {
      name: 'Clean Comfort 20x20x4 Filter',
      description: '20x20x4 Clean Comfort MRV11 is ideal for improving air quality, with long-lasting performance.',
      image: cleanComfortFilter20x20,
      affiliateLinkSingle: 'https://amzn.to/4gIItb6',
      affiliateLinkBundle: 'https://amzn.to/3XJKHhE',
    },
    {
      name: 'FilterBuy 25x25x4 Filter',
      description: '25x25x4 FilterBuy MERV 11 is perfect for enhancing air quality with durable, long-lasting performance.',
      image: filter25x25,
      affiliateLinkDouble: 'https://amzn.to/3BGIo7Q',
      affiliateLinkBundle: 'https://amzn.to/3ZTQXq2',
      isFilterBuy: true,
    },
    {
      name: 'AprilAire 210 Filter',
      description: 'This replacement filter for AprilAire 210 guarantees superior filtration performance.',
      image: aprilAire210, 
      affiliateLinkSingle: 'https://amzn.to/3Y8X9Im',
      affiliateLinkBundle: 'https://amzn.to/3zTRa1M',
    },
    {
      name: 'AprilAire 410 Filter',
      description: 'Compatible with AprilAire 410, this replacement filter ensures top filtration performance.',
      image: aprilAire410, 
      affiliateLinkSingle: 'https://amzn.to/3YikU1J',
      affiliateLinkBundle: 'https://amzn.to/4eWIeYd',
    },
    {
      name: 'AprilAire 600 Cartridge',
      description: 'Replacement cartridge for AprilAire 600, ensuring optimal humidifier performance.',
      image: aprilAireCartridge, 
      affiliateLinkSingle: 'https://amzn.to/3TJkgaU',
      affiliateLinkBundle: 'https://amzn.to/3N1CXCN',
      isAprilaire: true,
    },
    {
      name: 'AprilAire 700 Cartridge',
      description: 'Keep your humidifier running efficiently with this AprilAire 700 replacement cartridge.',
      image: aprilAireCartridge, 
      affiliateLinkSingle: 'https://amzn.to/3TJkgaU',
      affiliateLinkBundle: 'https://amzn.to/4ejquGK',
      isAprilaire: true,
    },
    {
      name: 'Reme Halo Bulb Replacement',
      description: 'Maintain your air purifier’s efficiency with this Reme Halo replacement bulb.',
      image: remeHaloBulb,
      affiliateLinkSingle: 'https://amzn.to/4gzsQCZ',
      isRemeHalo: true,
    },
    {
      name: 'Reme Halo Bulb LED Replacement',
      description: 'Enhance indoor air quality with this Reme Halo LED replacement light module.',
      image: remeHaloBulbLED,
      affiliateLinkSingle: 'https://amzn.to/3NhkB12',
      isRemeHalo: true,
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Maintenance Items for At Your Service Pros</h2>
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ objectFit: 'contain', height: '200px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <div className="d-flex justify-content-between">
                  {item.isRemeHalo ? (
                    <a
                      href={item.affiliateLinkSingle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Buy One on Amazon
                    </a>
                  ) : item.isAprilaire ? (
                    <>
                      <a
                        href={item.affiliateLinkSingle}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary me-2"
                      >
                        Buy One on Amazon
                      </a>
                      <a
                        href={item.affiliateLinkBundle}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        Buy +Panel on Amazon
                      </a>
                    </>
                     ) : item.isFilterBuy ? (
                      <>
                        <a
                          href={item.affiliateLinkDouble}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary me-2"
                        >
                          Buy Two on Amazon
                        </a>
                        <a
                          href={item.affiliateLinkBundle}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                        >
                          Buy Bundle on Amazon
                        </a>
                      </>
                  ) : (
                    <>
                      <a
                        href={item.affiliateLinkSingle}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary me-2"
                      >
                        Buy One on Amazon
                      </a>
                      <a
                        href={item.affiliateLinkBundle}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        Buy Bundle on Amazon
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceItems;