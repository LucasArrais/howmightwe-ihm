import Section from "../components/Section";

function MobilePrototype() {
  return (
    <Section id="prototipo" title="Protótipo">
      <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
        
        <div 
          style={{
            width: '375px', 
            height: '812px', 
            border: '14px solid #222',
            borderRadius: '36px',
            overflow: 'hidden', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)', 
            position: 'relative',
            backgroundColor: '#fff' 
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '24px',
              backgroundColor: '#222',
              borderBottomLeftRadius: '16px',
              borderBottomRightRadius: '16px',
              zIndex: 10
            }}
          ></div>

          <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            
            <iframe
              src="https://bear-surly-09070049.figma.site/"
              style={{ 
                width: 'calc(100% + 20px)',
                height: '100%', 
                border: 'none',
                marginLeft: '-10px'
              }}
              title="Projeto IHM - Visão Mobile"
            />
            
          </div>
        </div>

      </div>
    </Section>
  );
}

export default MobilePrototype;
