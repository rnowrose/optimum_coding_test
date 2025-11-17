import { Card, CardContent, List, ListItem, Typography } from "@mui/material";
import type { ProductionCompany } from "../../domain/Movies";
import CardHeader from '@mui/material/CardHeader';
import noLogoImage from '../../assets/image.png';

interface ProductionCompaniesProps {
    productionCompanies: ProductionCompany[];
    image: string;
    title: string;
}

export default function ProductionCompanies(props: ProductionCompaniesProps) {
    return (
        <Card>
        <CardHeader title={props.title} sx={{ gap: 2, backgroundColor: 'primary.main', color: 'primary.contrastText', fontWeight: 'bold'  }}>
          <Typography gutterBottom variant="h5">
            {props.title}
          </Typography>
      </CardHeader>
        <CardContent>
        <List>
            {props.productionCompanies.map((company: ProductionCompany) => (
                <ListItem key={company.id} 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center',
                            width: 'auto',
                            gap: 2
                        }}>
                    {company.logo ? <img src={`${props.image}${company.logo}`} alt={company.name} style={{ maxHeight: '50px', marginRight: '10px', borderRadius: '4px' }} /> : <img src={noLogoImage} alt="No Logo" style={{ maxHeight: '50px', marginRight: '10px', borderRadius: '4px' }} />}
                    {company.name} ({company.originCountry})
                </ListItem>
            ))}
        </List>
        </CardContent>
        </Card>
    )
}