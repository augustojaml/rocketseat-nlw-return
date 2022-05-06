import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log(`##########################################`);
  console.log(`#                                        #`);
  console.log(`#   Server is running in port ${3333} 🖥     #`);
  console.log(`#   NLW RETURN                           #`);
  console.log(`#   02 A 08 DE MAIO DE 2022              #`);
  console.log(`#                                        #`);
  console.log(`##########################################`);
});
