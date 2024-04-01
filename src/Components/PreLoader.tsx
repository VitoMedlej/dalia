"use client"
import React, { useEffect, useRef } from 'react'
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
import InstagramSection from './InstagramSection/InstagramSection'
// import ContactSection from './ContactSection/ContactSection'
import { gsap } from "gsap";



const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  // const textsArray = [
  //   {
  //     id: 1,
  //     title: text('100% Natural', '100٪ طبيعي'),
  //     desc: text(
  //       'Our honey is sourced from the purest natural environments, ensuring 100% natural goodness without any artificial additives or preservatives.',
  //       'عسلنا يأتي من أجواء طبيعية نقية، مما يضمن لك الخير الطبيعي بنسبة 100٪ دون أي إضافات صناعية أو مواد حافظة.'
  //     ),
  //   },
  //   {
  //     id: 2,
  //     title: text('Purity and Potency', 'النقاء والفعالية'),
  //     desc: text(
  //       'We carefully select our beehives in pristine locations, ensuring the purity and potency of our honey, so you experience the best benefits.',
  //       'نحن نختار خلايانا بعناية في أماكن نقية، مما يضمن نقاء وفعالية عسلنا، لتجربة فوائد متميزة.'
  //     ),
  //   },
  //   {
  //     id: 3,
  //     title: text('Expertly Formulated', 'صياغة خبيرة'),
  //     desc: text(
  //       'Our honey is expertly crafted by our team of experienced beekeepers, ensuring a premium product that delivers superior taste and quality.',
  //       'تم تصنيع عسلنا بخبرة من قبل فريق من مربي النحل ذوي الخبرة، مما يضمن لك منتجًا ممتازًا يقدم طعمًا وجودة فائقين.'
  //     ),
  //   },
  //   {
  //     id: 4,
  //     title: text('Great Value', 'قيمة عظيمة'),
  //     desc: text(
  //       'Mounet Dalia honey provides great value for your health, offering the highest quality honey at an affordable price for you and your family.',
  //       'عسل بي أورجانيك يقدم قيمة عظيمة لصحتك، حيث يوفر عسل عالي الجودة بسعر معقول لك ولعائلتك.'
  //     ),
  //   },
  // ];

  const animate = () => {
    for (let index = 0; index < 4; index++) {
      gsap.to(`.cate-${index}`, {
        opacity: 1,
        duration: .75,
        y:0,
        delay:Number(index) * Number(0.1),
        stagger: 0.2,
        scrollTrigger: {
          trigger:`.cate-${index}`,
          markers:false,
          start:'top 70% ' 
        }
      });

    gsap.to( `.sec-item-${index}`, {
      opacity: 1,
      y:0,

      duration: .75,
      delay:Number(index + 1) * Number(0.05),

      scrollTrigger: {
        trigger:`.sec-item-${index}`,
        markers:false,
        start:'top 80% ' 
      }
    });
  }
}
  useEffect(() => {
    animate()
  }, []);



  return (
    <Box >
      <MainCarousel res={resImages?.data?.Images[0]?.imagesArray}/>
      {/* <HomeProductCollection  products={data}/> */}
     
      <Container  className='flex row wrap ' sx={{
        px:{xs:1,md:2},
        gap:1,
        justifyContent:{xs:'center',sm:'justify-between'},
        my:{xs:0,sm:4}}} maxWidth='lg'>

      {
        [{
          img:`https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/h2_banner-1.jpg`,
          title:'Fresh Everyday'
        },
        {
          img:`https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/h2_banner-2.jpg`,
          title:'Lowest Price'
        },
        {
          img:`https://demo2.wpopal.com/ecolive/wp-content/uploads/2021/10/h2_banner-3.jpg`,
          title:' Special Flavour '
        }
      ].map((i,idx:number)=>{
        return <CategoryCard className={`cate-${idx}`} key={i} categoryName={i?.title} imageUrl={i?.img}/>
        
      })
    }
    </Container>


    <HomeProductsCarousel Collectiontitle={'Featured Products'} delay={5000} data={data}/>      



    <Grid sx={{my:8,maxWidth:'lg',width:{xs:'96%',md:'95%'},mx:'auto',gap:{xs:'1em',md:'.25em'}}} className='   relative'  container>
        <Grid className='sec-item-0 op0 y1'  item xs={12} md={6.9}>
        <Box 
    className='relative  carditem'
    
    sx={{boxShadow:'none',borderRadius:'4px',border:'none'
    ,
    //  width: {xs:'100%',sm:'48%',md:'32%'},
        height: {xs:'270px',sm:'250px',md:'100%'} 
    }}>

      <Box sx={{overflow:'hidden',width:'100%',height:'100%'}} className="absolute cateimg">
        <img style={{borderRadius:'10px'}} src={`https://ucarecdn.com/c63d2d4c-81a5-49f1-a462-2f13b7316768/pi.PNG`} alt="" className="img" />
      </Box>
  
      <Box sx={{background:'black',borderRadius:'10px',opacity:0.1}} className="absolute img">

      </Box>
       <Box className="catecard relative" sx={{ padding: '10% 2em' }}>
  <Typography gutterBottom className='text- black' sx={{ fontWeight:600 }} variant="h4" component="div">
    Organic<br />Superfood
  </Typography>
  <Typography gutterBottom className='text- black' sx={{ pb: 0.1, fontWeight: 300}} variant="h6" component="div">
    Build your juicy life
  </Typography>
  <Btn
                        onClick={()=>router.push('/collection/products')}

  className='bg2'  sx={{
    ':hover':{
      color:'black' ,
      background:'transparent',
      border:'1px solid transparent',
    },
    border:'1px solid transparent',

    fontWeight:'300',
    p:'.35em 1em !Important',
    fontSize:'.8em',
    width:'fit-content'
  }}>
    Shop Now
  </Btn>
</Box>
</Box>

        </Grid>

        <Grid className=' gap4 flex col'   item   xs={12} md={4.95}>
            <Grid className='sec-item-1 op0 y1'  item xs={12}>
            <Box 
    className='relative  carditem'
    
    sx={{boxShadow:'none',borderRadius:'4px',border:'none'
    ,
    //  width: {xs:'100%',sm:'48%',md:'32%'},
        height: {xs:'250px',sm:'300px',md:'200px'} 
    }}>

      <Box sx={{overflow:'hidden',width:'100%',height:'100%'}} className="absolute cateimg">
        <img style={{borderRadius:'10px'}} src={`https://ucarecdn.com/a0d4d87a-d543-4560-9c8a-30b4d1b07d21/h1img7.jpg`} alt="" className="img" />
      </Box>
  
      <Box sx={{background:'black',borderRadius:'10px',opacity:0.1}} className="absolute img">

      </Box>
      <Box className="catecard relative" sx={{ padding: '10% 2em' }}>
  <Typography gutterBottom className='text- black' sx={{ fontWeight: 800, fontSize:{xs:'1.5em',md:'1.2em'} }} variant="h4" component="div">
    
Healthy Eating
<br/>
Starts Here!
  </Typography>

  <Btn 
                        onClick={()=>router.push('/collection/products')}
  
  className='bg2'  sx={{
    ':hover':{
      color:'black' ,
      background:'transparent',
      border:'1px solid transparent',
    },
    border:'1px solid transparent',

    fontWeight:'300',
    p:'.35em 1em !Important',
    fontSize:'.8em',
    width:'fit-content'
  }}>
    Shop Now
  </Btn>
</Box>
        </Box>
            </Grid>
            <Grid className='sec-item-2 op0 y1' item xs={12}>
            <Box 
    className='relative  carditem '
    
    sx={{boxShadow:'none',borderRadius:'4px',border:'none'
    ,
    //  width: {xs:'100%',sm:'48%',md:'32%'},
        height: {xs:'250px',sm:'300px',md:'200px'} 
    }}>

      <Box sx={{overflow:'hidden',width:'100%',height:'100%'}} className="absolute cateimg">
        <img style={{borderRadius:'10px'}} src={`https://ucarecdn.com/3781b385-0f31-47b0-87b1-407a5dab2465/h1img6.jpg`} alt="" className="img" />
      </Box>
  
      <Box sx={{background:'black',borderRadius:'10px',opacity:0.1}} className="absolute img">

      </Box>
      <Box className="catecard relative p0" >
<Typography gutterBottom className='text-' sx={{pb:1,fontWeight:600}} variant="h5" component="div">

</Typography>
      <Typography gutterBottom className='text-' sx={{pb:.1,pt:.5,fontWeight:300}} variant="h6" component="div">
</Typography>

</Box>
        </Box>
            </Grid>
        </Grid>
   
    </Grid>

    <HomeProductCollection  products={data}/>

    
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

    <InstagramSection/>
    

    {/* <Box sx={{padding:'0 !important',my:{xs:8,sm:12},height:'500px',overflow:'hidden',maxWidth:'none',
    
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

                    
                    sx={{border:'none',
                    px:'1em !Important',
                    mx:'auto',mt:1}}>
                    {text('Donate Now')}

                    </Btn>
      </Box>
      <Box sx={{height:'100%',width:'100%'}}>
      <img src="https://madebynaturelb.com/wp-content/uploads/2023/08/Group-853.jpg?id=74371" alt="" className="img" />
 
      </Box>

      </Box>    */}
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


      

        {/* <ContactSection/> */}
        
  </Box>
  )
}

export default PreLoader