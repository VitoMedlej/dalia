import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { AiOutlineArrowUp } from 'react-icons/ai'; // Assuming you've imported the AiOutlineArrowUp icon
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

export const AllCats =  [
    {
      categoryName: "dogs",
      categoryItems: [
        {
          Category: "Food",
          Subcategories: ["Dry food", "Wet food"]
        },
        {
          Category: "Treats",
          Subcategories: ["Casual treats", "Training treats", "Dental treats", "Bones"]
        },
        {
          Category: "Toys",
          Subcategories: ["Casual toys", "Interactive toys", "Kong"]
        },
        {
          Category: "Apparels",
          Subcategories: ["Leashes", "Collars", "Harnesses", "Clothes", "Scarfs"]
        },
        {
          Category: "Beds and Houses",
          Subcategories: ["Beds", "Crates"]
        },
        {
          Category: "Grooming Essentials",
          Subcategories: ["Brushes", "Nail clippers", "Perfumes", "Shampoos", "Hygiene accessories"]
        },
        {
          Category: "Medication",
          Subcategories: ["Ticks & Fleas", "Oral health", "Supplements"]
        },
        {
          Category: "Accessories",
          Subcategories: ["Bowls & Feeders", "Muzzles"]
        }
      ]
    },
    {
      categoryName: "cats",
      categoryItems: [
        {
          Category: "Food",
          Subcategories: ["Dry food", "Wet food"]
        },
        {
          Category: "Litter",
          Subcategories: []
        },
        {
          Category: "Scratchers",
          Subcategories: []
        },
        {
          Category: "Treats",
          Subcategories: ["Wet treats", "Casual treats"]
        },
        {
          Category: "Toys",
          Subcategories: ["Casual toys", "Interactive toys", "Kong"]
        },
        {
          Category: "Apparels",
          Subcategories: ["Leashes", "Collars", "Harnesses", "Clothes", "Scarfs"]
        },
        {
          Category: "Beds and Houses",
          Subcategories: ["Beds", "Crates"]
        },
        {
          Category: "Grooming Essentials",
          Subcategories: ["Brushes", "Nail clippers", "Perfumes", "Shampoos", "Hygiene accessories"]
        },
        {
          Category: "Medication",
          Subcategories: ["Ticks & Fleas", "Oral health", "Supplements"]
        },
        {
          Category: "Accessories",
          Subcategories: ["Bowls & Feeders"]
        }
      ]
    }]

    function NestedMenuAccordion({toggleDrawer}:any) {
        const [open, setOpen] = useState(false);
        const router = useRouter()
        const handleRoute = (category : string,mainCategory:string,subCategory?:string) => {
          toggleDrawer && toggleDrawer(false);
          router.push(`/${mainCategory.replace(/ /g, '-').toLocaleLowerCase()}/products?type=${category ? category.replace(/ /g, '-').toLocaleLowerCase() : null}&subcategory=${subCategory ? encodeURIComponent(subCategory).toLocaleLowerCase() : null}`)
          return
            };
      
        return (
          <Box sx={{ border: 'none', boxShadow: 'none' }}>
            <List disablePadding>
              {AllCats.map((mainCategory) => (
                <Accordion
                  key={mainCategory.categoryName}
                  sx={{ border: 'none', boxShadow: 'none' }}
                >
                  <AccordionSummary
                    expandIcon={<AiOutlineArrowUp />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    // onClick={() => setSelectedCategory(mainCategory.categoryName)}
                  >
                    <Typography sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                      {mainCategory.categoryName}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {mainCategory.categoryItems.map((subcategory) => (
                      <Accordion
                        key={subcategory.Category}
                        sx={{ border: 'none', boxShadow: 'none' }}
                      >
                        <AccordionSummary
                          expandIcon={<AiOutlineArrowUp />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography sx={{ fontWeight: 600 }}>
                            {subcategory.Category}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {
                            <List>
                                       <ListItemButton
                                  onClick={() =>handleRoute(subcategory.Category,mainCategory.categoryName)}
                                >
                                  <Typography>All {subcategory.Category}</Typography>
                                </ListItemButton>
                              {subcategory.Subcategories.map((type) => (
                                <ListItemButton
                                  key={type}
                                  onClick={() => 
                                    handleRoute(subcategory.Category,mainCategory.categoryName,type)
                                }
                                >
                                  <Typography>{type}</Typography>
                                </ListItemButton>
                              ))}
                            </List>
                          }
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </List>
          </Box>
        );
      }
      
      export default NestedMenuAccordion;