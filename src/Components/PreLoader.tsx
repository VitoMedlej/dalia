"use client"
import React from 'react'
import { Box,  Container, Grid, Typography } from "@mui/material"
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
        'Bee Organic honey provides great value for your health, offering the highest quality honey at an affordable price for you and your family.',
        'عسل بي أورجانيك يقدم قيمة عظيمة لصحتك، حيث يوفر عسل عالي الجودة بسعر معقول لك ولعائلتك.'
      ),
    },
  ];
  

  return (
    <Box >
      <MainCarousel resImages={resImages}/>
      <Perks/>
      <HomeProductCollection  products={data}/>


    <Grid  sx={{background:'#f9d40100',alignItems:'center',justifyContent:'center',width:'100%',py:8}} container>

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
        {text('At Bee Organic, we’re passionate about health and wellness. We believe in the power of nature, and that’s why we’ve created a range of natural supplements to help you live your best life. From ashwagandha to tongkat ali, we’ve got everything you need to feel your best.', 'في ترو ناشور بليند، نحن ملتزمون بالصحة والعافية. نحن نؤمن بقوة الطبيعة، وهذا هو السبب في أننا قمنا بإنشاء مجموعة من المكملات الطبيعية لمساعدتك على عيش حياتك بأفضل طريقة. من الأشواغاندا إلى تونجكات علي، لدينا كل ما تحتاجه لتشعر بأفضل حال.')}

        </Typography>
        {/* <Btn 
        onClick={()=>router.push('/about')}
        
        className=' auto center' sx={{width:'150px',color:'black',mt:2,px:0}}>
        {text('Learn More')}

        </Btn> */}
    </Container>

    </Grid>

    {/* <Grid  maxWidth='lg' item xs={12} sx={{mt:{xs:8,sm:12}}}>
      <Typography  component='h1' sx={{fontSize:{xs:'2em',sm:'3em'},fontWeight:600}} className='center text-center auto color'>
      {text('Why Choose Bee Organic?', 'لماذا تختار ترو ناشور بليند؟')}

      </Typography>
      <Typography sx={{width:'100%',maxWidth:'800px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',pt:1.5}} className='center text-center auto'>
      {text('Our supplements are made with only the finest natural ingredients, carefully selected for their purity and potency. Our products are free from harmful chemicals', 'مكملاتنا مصنوعة فقط من أرقى المكونات الطبيعية، تم اختيارها بعناية بسبب نقاوتها وفعاليتها. منتجاتنا خالية من المواد الكيميائية الضارة.')}

        </Typography>
    </Grid> */}
    {/* <Grid  xs={12}  sx={{mt:4}}
    >
      <Container sx={{maxWidth:'lg'}} className='flex wrap row justify-between'>

      {textsArray.map(i=>{
        return <Box sx={{borderBottom:'1px solid white',width:{xs:'98%',sm:'200px',md:'48%'},maxWidth:'500px',mt:2.5}} key={i.id}>
  
          <Typography className='color2' sx={{fontSize:'1.4em',fontWeight:500}}>
            {i.title}
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:'.8em',pb:.65,maxWidth:'350px'}}>
            {i.desc}
          </Typography>
        </Box>
      })}
      </Container>

    </Grid> */}
    </Grid>
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
    

        <Container sx={{pt:12,justifyContent:'space-between'}} className='flex row wrap space-between items-between' maxWidth='xl'>
      <Box className='relative flex center items-center ' sx={{mb:2, width:{xs:'100%',sm:'49%',md:'49%'},height:{xs:'350px',sm:'350px',md:'450px',lg:'49vw'}}}>
                  <img src="https://ucarecdn.com/de6677d9-a5c9-4d36-8264-93901372dff5/image00006.jpeg" alt="" className="img" />
                  <Box  className="absolute flex center auto items-center text-center col ">
                    <Typography component='h1' className='center text-center' sx={{fontWeight:600,fontSize:'3em',textShadow:'1px 1px 3px #01010163',color:'white'}}>
                    {text('Blossom Honey', 'الفطر الطبي')}

                    </Typography>
                    <Btn
        onClick={()=>router.push(`/Fruit/products`)}

                    
                    sx={{border:'none',mx:'auto'}}>
                    {text('SHOP NOW', 'تسوق الآن')}

                    </Btn>
                  </Box>
            </Box>
            {/* <Box className='relative flex center items-center ' sx={{mb:2, width:{xs:'100%',sm:'49%',md:'49%'},height:{xs:'350px',sm:'350px',md:'450px',lg:'49vw'}}}>
                  <img src="https://dewarticles.com/wp-content/uploads/2021/06/natural-products.jpg" alt="Natural Supplements Image" className="img" />
                  <Box  className="absolute flex center auto items-center text-center col ">
                    <Typography className='center text-center' sx={{fontSize:'3em',textShadow:' #000000c',color:'white'}}>
                    {text('Natural Supplements', 'المكملات الغذائية الطبيعية')}

                    </Typography>
                    <Btn
        onClick={()=>router.push(`/natural supplements/products?type=all`)}
                    
                    sx={{border:'none',mx:'auto'}}>
                    {text('SHOP NOW', 'تسوق الآن')}

                    </Btn>
                  </Box>
            </Box> */}
      <Box className='relative flex center items-center ' sx={{mb:2, width:{xs:'100%',sm:'49%',md:'49%'},height:{xs:'350px',sm:'350px',md:'450px',lg:'49vw'}}}>
                  <img src="https://ucarecdn.com/3b04ade0-643d-4c22-92df-1c5126ce676d/image00003.jpeg" alt="" className="img" />
                  <Box  className="absolute flex center auto items-center col text-center">
                  <Typography component='h1' className='center text-center' sx={{fontWeight:600,fontSize:'3em',textShadow:'1px 1px 3px #01010163',color:'white'}}>

                      
                      {text('Al-JARDI HONEY', 'أعشاب عضوية')}
</Typography>
                    <Btn
            onClick={()=>router.push(`/Nut/products?type=all`)}

                    
                    sx={{border:'none',mx:'auto'}}>
                    {text('SHOP NOW', 'تسوق الآن')}

                    </Btn>
                  </Box>
            </Box>
          
      </Container>

      {/* <HomeProductCollection  products={data}/> */}


      {/* <Container  className='flex center wrap items-center row' sx={{py:5,my:8,mx:'auto',maxWidth:'lg',background:'#f4f8fd',}}>
        <Box>
        <Typography sx={{width:'100%',maxWidth:'600px',flex:1,fontSize:{xs:'.95em',sm:'1.19em'},fontWeight:300,color:'#4d555e',mt:2}} className=''>
            
        {text('At Bee Organic, we’re committed to sustainability. That’s why we use eco-friendly packaging and support sustainable farming practices to ensure that our products have a minimal impact on the environment.', 'في ترو ناشور بليند، نحن ملتزمون بالاستدامة. لهذا السبب نستخدم تعبئة صديقة للبيئة وندعم ممارسات الزراعة المستدامة لضمان أن منتجاتنا لها تأثير أدنى على البيئة.')}

            </Typography>
        </Box>
        
        <Box sx={{ width:{xs:'200px',sm:'200px'},height:{xs:'200px',sm:'200px'},my:1}} className='auto rounded'>
          <img src="https://funmauj.b-cdn.net/test/928368.jpg" alt="" className="img rounded" />
        </Box>
        </Container>        */}
    {/* <FullscreenPoster/> */}
    {/* <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(10,18)}/> */}
    {/* <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(18)}/> */}

    <Box sx={{my:8,height:'500px',overflow:'hidden'}} className='relative flex center items-center'>
      <Box className="absolute" sx={{width:'100%',height:'100%',top:0,right:0,background:'black',opacity:.5}}></Box>
      <Box sx={{maxWidth:'lg',px:1}} className="absolute center flex text-center col auto">
        <Typography component='h1' sx={{textTransform:'uppercase',fontSize:{xs:'2.5em',sm:'3em'},fontWeight:'600',color:'white'}}>
        {text('We’re about creating a community', 'رسالتنا')}
        </Typography>
        <Typography sx={{fontSize:{xs:'.74em',sm:'.9em'},color:'white',maxWidth:'800px'}} className='auto'>
        {text('that values health, wellness, and sustainability. We’re about educating our customers on the importance of bees in our ecosystem and how our consumption choices impact their survival.', 'مهمتنا في ترو ناشور بليند هي تقديم أعلى جودة من المكملات الطبيعية لدعم أهداف الصحة والعافية لعملائنا. نحن ملتزمون بالاستدامة ودعم البيئة، ونؤمن بقوة الطبيعة في مساعدتنا على عيش أفضل حياة.')}

        </Typography>
        <Btn
            onClick={()=>router.push(`/collection/products?type=all`)}

                    
                    sx={{border:'none',mx:'auto',mt:1}}>
                    {text('SHOP NOW', 'تسوق الآن')}

                    </Btn>
      </Box>
      <Box sx={{height:'100%',width:'100%'}}>
      <img src="https://th.bing.com/th/id/R.23b52c1b4ac90cffbfdf9fa5af6800a7?rik=8uvQObYQku8vZA&riu=http%3a%2f%2fimg1.wsimg.com%2fisteam%2fip%2f59f67ef2-0d3d-4e01-b060-b5c8b8657b99%2f455F2F40-FDD6-45AC-89C5-BBA51B27709E.jpeg&ehk=rSkzbGSGTX5Kl%2b4lDKjkpAvDo3jxBk%2bZOkfqHiGIQVA%3d&risl=&pid=ImgRaw&r=0" alt="" className="img" />
 
      </Box>

      </Box>        

    {/* <Testimonials/> */}

        
        {/* <ContactSection/> */}
  </Box>
  )
}

export default PreLoader