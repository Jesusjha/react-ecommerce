import { Container, Card, Text, Dropdown } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Help() {
	return (
		<>
			<Container>
				<Card css={{ bc: '$accents9', w: '80rem', margin: '2rem auto' }}>
					<Card.Body css={{ margin: 'auto' }}>
						<Text color='#fff' h2>
							Help Section
						</Text>
					</Card.Body>
				</Card>
			</Container>
			<Container>
				<Card css={{ w: '80rem', margin: '2rem auto' }}>
      <Dropdown>
      <Dropdown.Button css={{m:'1rem', w:'3rem'}} flat>Sections</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item key="new"><Link to='/help'>Ordering</Link></Dropdown.Item>
        <Dropdown.Item key="copy"><Link to='/help/payment'>Payment</Link></Dropdown.Item>
        <Dropdown.Item key="edit"><Link to='/help/shipping'>Shipping</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
					<Card.Body css={{ margin: 'auto' }}>
            <Text css={{mb:'2rem'}} h2>
              Ordering
            </Text>
						<Text color='$accents9'>
							Lorem fistrum occaecat magna qué dise usteer ut officia officia al
							ataquerl commodo sed benemeritaar. Condemor reprehenderit no te
							digo trigo por no llamarte Rodrigor et sit amet ese pedazo de sit
							amet. Adipisicing aliqua incididunt ad duis. Consequat pecador no
							te digo trigo por no llamarte Rodrigor ex sed magna dolor está la
							cosa muy malar adipisicing. Ut papaar papaar qui aliqua. A wan
							duis la caidita aliqua nostrud labore incididunt tiene musho
							peligro. Occaecat quis tiene musho peligro papaar papaar diodeno
							cillum sit amet nisi quis. Nostrud diodenoo va usté muy cargadoo
							incididunt consequat pecador aliqua tempor. Va usté muy cargadoo
							officia nostrud ullamco mamaar ese pedazo de a peich. Nostrud
							quietooor voluptate hasta luego Lucas hasta luego Lucas.
              </Text>
              <Text css={{mt:'0.8rem'}} color='$accents9'>
							Consectetur elit va usté muy cargadoo aute veniam. Exercitation
							diodeno sit amet torpedo. Veniam al ataquerl ut velit tiene musho
							peligro elit dolor enim. Jarl hasta luego Lucas sit amet velit.
							Incididunt adipisicing aute jarl por la gloria de mi madre
							apetecan. Nostrud irure velit sit amet occaecat. A wan va usté muy
							cargadoo la caidita jarl ad te voy a borrar el cerito. Pecador
							officia incididunt jarl veniam ese que llega incididunt se calle
							ustée por la gloria de mi madre benemeritaar. Consequat sit amet a
							gramenawer caballo blanco caballo negroorl aliqua cillum sed
							minim. Amatomaa te voy a borrar el cerito veniam llevame al sircoo
							nostrud jarl apetecan qui. Voluptate a gramenawer sit amet
							apetecan veniam ut sexuarl papaar papaar fistro. Te va a hasé
							pupitaa la caidita tempor diodenoo de la pradera irure et.
						</Text>
					</Card.Body>
				</Card>
			</Container>
		</>
	);
}

export default Help;

{
	/* <Row>
              <Link to='/help/ordering'>Ordering</Link>
              </Row>
              <Row>
              <Link to='/help/payment'>Payment</Link>
              </Row>
              <Row>
              <Link to='/help/shipping'>Shipping</Link>
              </Row> */
}
