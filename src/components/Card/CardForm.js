import React from 'react'
import { Grid, Icon, Card, Header } from 'semantic-ui-react'
import propTypes from 'prop-types'
import './index.css'

function CardForm({ description, title, iconCard, children }) {
  return (
    <>
      <Header as="h2">{title}</Header>
      <Grid>
        <Grid.Column>
          <Card fluid raised>
            <Card.Content>
              <Card.Meta className="card-meta">
                <div className="form-icon">
                  <Icon name={iconCard?.icon} size={iconCard?.size} />
                </div>
              </Card.Meta>
              <Card.Description>
                <Header as="h3">{description}</Header>
                {children}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </>
  )
}

CardForm.propTypes = {
  description: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  children: propTypes.any.isRequired
}

CardForm.defaultProps = {
  title: 'Ninguno',
  description: 'Ninguno'
}
export default CardForm
