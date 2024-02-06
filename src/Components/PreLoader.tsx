"use client"
import React from 'react'
import { Box,  Container, Grid, TextField, Typography } from "@mui/material"
// import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
// import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'
import useLanguage from '@/Hooks/useLanguage'
import CategoryCard from './CategoryCard/CategoryCard'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  const {text} = useLanguage()
  const textsArray = [
    {
      id: 1,
      title: text('100% Natural', '100٪ طبيعي'),
      desc: text(
        'Our honey is sourced from the purest natural environments, ensuring 100% natural goodness without any artificial additives or preservatives.',
        'عسلنا يأتي من أجواء طبيعية نقية، مما يضمن لك الخير الطبيعي بنسبة 100٪ دون أي إضافات صناعية أو مواد حافظة.'
      ),
    },
    {
      id: 2,
      title: text('Purity and Potency', 'النقاء والفعالية'),
      desc: text(
        'We carefully select our beehives in pristine locations, ensuring the purity and potency of our honey, so you experience the best benefits.',
        'نحن نختار خلايانا بعناية في أماكن نقية، مما يضمن نقاء وفعالية عسلنا، لتجربة فوائد متميزة.'
      ),
    },
    {
      id: 3,
      title: text('Expertly Formulated', 'صياغة خبيرة'),
      desc: text(
        'Our honey is expertly crafted by our team of experienced beekeepers, ensuring a premium product that delivers superior taste and quality.',
        'تم تصنيع عسلنا بخبرة من قبل فريق من مربي النحل ذوي الخبرة، مما يضمن لك منتجًا ممتازًا يقدم طعمًا وجودة فائقين.'
      ),
    },
    {
      id: 4,
      title: text('Great Value', 'قيمة عظيمة'),
      desc: text(
        'Mounet Dalia honey provides great value for your health, offering the highest quality honey at an affordable price for you and your family.',
        'عسل بي أورجانيك يقدم قيمة عظيمة لصحتك، حيث يوفر عسل عالي الجودة بسعر معقول لك ولعائلتك.'
      ),
    },
  ];
  

  return (
    <Box >
      <MainCarousel/>
      <HomeProductCollection  products={data}/>
  
    <Grid sx={{mt:4}} container className='flex bg'>
        <Grid  xs={12} sm={6} item className='bg flex col center text-center items-center' sx={{py:4}}>
          <Box className="flex  col center text-center items-center">
            <Typography 
            className='white'
            sx={{px:1,fontSize:{xs:'2em',sm:'3em'},fontWeight:700}}>
              About Mounet Dalia's 
            </Typography>
            <Typography sx={{px:1}} className='white'>
            Embark on a delicious journey with Mounet Dalia as we invite you to explore the vibrant flavors of Lebanon, whether you're indulging in our handmade preserves, savoring our aromatic spices, or delighting in our artisanal spreads.
            </Typography>
            <Btn className='bg2' sx={{mt:2}}>
              Learn More
            </Btn>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box sx={{width:'100%',height:'100%'}}>
              <img src="https://ucarecdn.com/1a95afe1-0e8e-41fb-a4fa-00ef857ef23a/418621867_1412854806328214_6415211719117463606_n.jpg" alt="" className="img" />
            </Box>
        </Grid>
    </Grid>

  <HomeProductsCarousel Collectiontitle={'Our Best Sellers'} delay={0} data={data}/>      

      <Container className='flex row wrap ' sx={{
        justifyContent:{xs:'center',sm:'justify-between'},
        my:{xs:8,sm:12}}} maxWidth='lg'>

      {
        [{
          img:`https://ucarecdn.com/7fea20d3-484f-40ce-a65a-a647258bf8d5/411045445_747027977349294_1663032584200259792_n.jpg`,
          title:'Labneh'
        },
        {
          img:`https://ucarecdn.com/a983b4af-f02f-48bf-92ab-31ca70061d5c/418698985_1752566701907368_3211893865957316752_n.jpg`,
          title:'Olives & Olive Oil'
        },
        {
          img:`https://ucarecdn.com/9d220db7-8eff-4a16-923a-1abd3be4d0d0/413446196_3774316836187782_3031473529925331693_n.jpg`,
          title:'Keshek'
        }
      ].map(i=>{
        return <CategoryCard key={i} categoryName={i?.title} imageUrl={i?.img}/>
        
      })
    }
    </Container>
      <Perks/>


    {/* <Grid  sx={{background:'#f9d40100',alignItems:'center',justifyContent:'center',width:'100%',py:8}} container>

    <Grid  maxWidth='lg' item xs={9} md={4}>
      <Box sx={{height:'400px',maxWidth:'350px'}} className='auto'>
        <img src="https://ucarecdn.com/20fdd745-f27d-4fcc-810a-b1579112422f/2nd.jpg" alt="" className="img" />
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
    <Container  className='wrap col center text-center auto flex' sx={{alignItems:'center',px:{sm:1},display:'flex'}}>
     
        <Typography sx={{width:'100%',maxWidth:'500px',
        pt:{xs:2,sm:0},
        fontSize:{xs:'2em',sm:'3em'},
        fontWeight:900}} component='h1' className='color2 center text-center'>
        {text('Taste the Authenticity of Lebanon ', 'مرحبًا في ترو ناتشور بليند')}

        </Typography>
        <Typography sx={{width:'100%',maxWidth:'470px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',mt:2}} className='center text-center'>
        {text('At Mounet Dalia, we’re passionate about health and wellness. We believe in the power of nature, and that’s why we’ve created a range of natural supplements to help you live your best life. From ashwagandha to tongkat ali, we’ve got everything you need to feel your best.', 'في ترو ناشور بليند، نحن ملتزمون بالصحة والعافية. نحن نؤمن بقوة الطبيعة، وهذا هو السبب في أننا قمنا بإنشاء مجموعة من المكملات الطبيعية لمساعدتك على عيش حياتك بأفضل طريقة. من الأشواغاندا إلى تونجكات علي، لدينا كل ما تحتاجه لتشعر بأفضل حال.')}

        </Typography>
      
    </Container>

    </Grid>

   
    </Grid> */}


    <Box sx={{padding:'0 !important',my:{xs:8,sm:12},height:'500px',overflow:'hidden',maxWidth:'none',
    
    width:'100%'}} className='relative flex center items-center'>
      <Box className="absolute" sx={{width:'100%',height:'100%',top:0,right:0,background:'black',opacity:.45}}></Box>
      <Box sx={{maxWidth:'lg',px:1}} className="absolute center flex text-center col auto">
        
      <Typography component='h1' className='auto clr2 center' sx={{maxWidth:'900px',textTransform:'uppercase',fontSize:{xs:'1em',sm:'1.5em'},fontWeight:'300',color:'white'}}>

      Together We Can Help The
      </Typography>
        <Typography component='h1' className='auto center' sx={{maxWidth:'900px',textTransform:'uppercase',fontSize:{xs:'2.5em',sm:'3em'},fontWeight:'600',color:'white'}}>
        {text('FAMILIES IN NEED', 'رسالتنا')}
        </Typography>
        <Typography sx={{fontSize:{xs:'.74em',sm:'.9em'},color:'white',maxWidth:'660px'}} className='center auto'>
        {text('that values health, wellness, and sustainability. We’re about educating our customers on the importance of bees in our ecosystem and how our consumption choices impact their survival.', 'مهمتنا في ترو ناشور بليند هي تقديم أعلى جودة من المكملات الطبيعية لدعم أهداف الصحة والعافية لعملائنا. نحن ملتزمون بالاستدامة ودعم البيئة، ونؤمن بقوة الطبيعة في مساعدتنا على عيش أفضل حياة.')}

        </Typography>
        <Btn
            onClick={()=>router.push(`/collection/products?type=all`)}

                    
                    sx={{border:'none',mx:'auto',mt:1}}>
                    {text('Donate Now')}

                    </Btn>
      </Box>
      <Box sx={{height:'100%',width:'100%'}}>
      <img src="https://madebynaturelb.com/wp-content/uploads/2023/08/Group-853.jpg?id=74371" alt="" className="img" />
 
      </Box>

      </Box>   
    {/* <Box className='flex auto wrap ' sx={{justifyContent:'space-between',width:'100%',maxWidth:'xl'}}>
      {
        resImages?.categoryImage && resImages?.categoryImage.map((img:any)=>{
          return <Box className='cursor' onClick={()=>router.push('/collection/products')} key={img?.img} sx={{minWidth:'200px',my:1,width:{xs:'99%',sm:'49%',md:'48%'}}}>
            <img src={img?.img} alt="Category Image Shop Now" className="img" />
          </Box>
        })
      }
    </Box> */}

     {/* <Box
                className=' text-center auto center box'
     
     sx={{mx:1,width:'100%'}}> */}
{/* 
        
         <Typography
                className='sectionTitle text-center auto center box'
                sx={{
                  py:'.15em',
                  // pt:9,
                  display:'flex',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                flex:1,
                fontWeight: '300'
            }}>
               Explore Categories
            </Typography>
          */}

            {/* <Box className='wrap  space-evenly' sx={{width:'100%',my:3,display:{xs:'flex'}}}> */}

        {/* {cates.map((i:any)=>{
            return <Box

            onClick={()=>router.push(`${i?.category.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
            key={i?.img} className='cursor'
             sx={{borderRadius:'50%',height:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'},
             my:2,width:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'}}}>
                    <img src={i?.img} alt={`${i?.category ,'image'}`} style={{borderRadius:'50%'}} className="img" />
                    <Typography sx={{fontWeight:'500',fontSize:'.65em',textAlign: 'center',px:1}}>
             {i?.category}
            </Typography>
            </Box>

        })} */}

{/* {resImages?.first && <Box

onClick={()=>router.push(`${'circut machines'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
 className='cursor'
 sx={{borderRadius:'50%',height:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'},
 my:2,width:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'}}}>
        <img src={resImages?.first} alt={`Circut Machines Images image`} style={{borderRadius:'2%'}} className="img" />
        <Typography sx={{fontWeight:'500',fontSize:'.65em',textAlign: 'center',px:1}}>
        Circut Machines
</Typography>
</Box>}


{resImages?.second && <Box
  onClick={() => router.push(`${'customizable-blanks'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={`${resImages?.second}`} alt={`Customizable Blanks Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Customizable Blanks
  </Typography>
</Box>}
{resImages?.third && <Box
  onClick={() => router.push(`${'hot-offers'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.third} alt={`Hot Offers Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Hot Offers
  </Typography>
</Box>}
{resImages?.fourth && <Box
  onClick={() => router.push(`${'new-arrivals'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.fourth} alt={`New Arrivals Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    New Arrivals
  </Typography>
</Box>}
{resImages?.fifth && <Box
  onClick={() => router.push(`${'materials'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.fifth} alt={`Materials Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Materials
  </Typography>
</Box>} */}


            {/* </Box> */}

     {/* </Box> */}

      <Box/>
    


      {/* <HomeProductCollection  products={data}/> */}


      {/* <Container  className='flex center wrap items-center row' sx={{py:5,my:8,mx:'auto',maxWidth:'lg',background:'#f4f8fd',}}>
        <Box>
        <Typography sx={{width:'100%',maxWidth:'600px',flex:1,fontSize:{xs:'.95em',sm:'1.19em'},fontWeight:300,color:'#4d555e',mt:2}} className=''>
            
        {text('At Mounet Dalia, we’re committed to sustainability. That’s why we use eco-friendly packaging and support sustainable farming practices to ensure that our products have a minimal impact on the environment.', 'في ترو ناشور بليند، نحن ملتزمون بالاستدامة. لهذا السبب نستخدم تعبئة صديقة للبيئة وندعم ممارسات الزراعة المستدامة لضمان أن منتجاتنا لها تأثير أدنى على البيئة.')}

            </Typography>
        </Box>
        
        <Box sx={{ width:{xs:'200px',sm:'200px'},height:{xs:'200px',sm:'200px'},my:1}} className='auto rounded'>
          <img src="https://funmauj.b-cdn.net/test/928368.jpg" alt="" className="img rounded" />
        </Box>
        </Container>        */}
    {/* <FullscreenPoster/> */}
    {/* <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(10,18)}/> */}
    {/* <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(18)}/> */}

     

    {/* <Testimonials/> */}

        <Grid className='flex  items-center auto' sx={{justifyContent:'space-between'
      ,py:4,background:'#f6f6f6 !important',
      }} container>
        <Container className='flex auto wrap row items-center' sx={{maxWidth:'lg'}}>
          <Grid   item xs={12} sm={6}>
            <Typography
            className='clr'
            sx={{color:'white',fontSize:'1.5em',fontWeight:600}}>Grab an extra 5% Discount</Typography>
            <Typography
            sx={{fontSize:'.8em',color:'#696969'}}
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda tenetur et reprehenderit possimus. Et rem sequi eos nesciunt sint debitis? Vel, reiciendis ipsum. Aut, totam.</Typography>
          </Grid>
          <Grid sx={{mt:{xs:2,sm:0}}} className="flex center items-center row wrap "
           item xs={12} sm={6}>
            <Box className="flex row wrap gap gap1" sx={{height:'40px',maxWidth:'500px'}}>

            <input className='emailinput'  style={{backgroundColor:'white',color:'black',
           borderRadius:'4px',
          
          }}
            placeholder='Enter Email'
            type='email' value=''/>
            <Btn>
              Submit
            </Btn>
            </Box>
          </Grid>
          </Container>

        </Grid>
        {/* <ContactSection/> */}
  </Box>
  )
}

export default PreLoader