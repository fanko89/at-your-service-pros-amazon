import React from 'react';
import './MaintenanceItems.css';
import remeHaloBulb from './img/reme_bulb.jpg';
import cleanComfortFilter20x25 from './img/20x25x4.jpg';
import cleanComfortFilter20x20 from './img/20x20x4.jpg';
import aprilaireCartridge from './img/600_700_cart_pan.jpg';


const MaintenanceItems = () => {
  const items = [
    {
      name: 'Clean Comfort 20x25x4 Filter',
      description: '20x25x4 comfort MRV11 is a High-efficiency air filter, suitable for Clean Comfort HVAC systems.',
      image: cleanComfortFilter20x25, 
      affiliateLinkSingle: 'https://amzn.to/47Gqk9Q',
      affiliateLinkBundle: 'https://amzn.to/4gywkp8',
    },
    {
      name: 'Clean Comfort 20x20x4 Filter',
      description: '20x20x4 clean comfort MRV11 is ideal for improving air quality, with long-lasting performance.',
      image: cleanComfortFilter20x20,
      affiliateLinkSingle: 'https://amzn.to/4gIItb6',
      affiliateLinkBundle: 'https://amzn.to/3XJKHhE',
    },
    {
      name: 'AprilAire 600 Cartridge',
      description: 'Replacement cartridge for AprilAire 600, ensuring optimal humidifier performance.',
      image: aprilaireCartridge, 
      affiliateLinkSingle: 'https://amzn.to/3TJkgaU',
      affiliateLinkBundle: 'https://amzn.to/3N1CXCN',
      isAprilaire: true,
    },
    {
      name: 'AprilAire 700 Cartridge',
      description: 'Keep your humidifier running efficiently with this AprilAire 700 replacement cartridge.',
      image: aprilaireCartridge, 
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
                        Buy one on Amazon
                      </a>
                      <a
                        href={item.affiliateLinkBundle}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        Buy +panel on Amazon
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