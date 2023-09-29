"use client"
import React from 'react'
import { Box,  Container, Grid, Typography } from "@mui/material"
import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
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
      desc: text('Our supplements are made from only the finest natural ingredients, ensuring that you get the best possible results without any harmful chemicals or additives.', 'مكملاتنا مصنوعة فقط من أرقى المكونات الطبيعية، مما يضمن لك الحصول على أفضل النتائج دون أي مواد كيميائية ضارة أو مواد إضافية.')
    },
    {
      id: 2,
      title: text('Purity and Potency', 'النقاء والفعالية'),
      desc: text('We carefully select our ingredients for their purity and potency, ensuring that you get the best possible results from our supplements.', 'نحن نختار مكوناتنا بعناية بسبب نقاوتها وفعاليتها، مما يضمن لك الحصول على أفضل النتائج من مكملاتنا.')
    },
    {
      id: 3,
      title: text('Expertly Formulated', 'صياغة خبيرة'),
      desc: text('Our supplements are expertly formulated by our team of experienced professionals, ensuring that you get the best possible results every time.', 'تم صياغة مكملاتنا بخبرة من قبل فريق من المحترفين ذوي الخبرة، مما يضمن لك الحصول على أفضل النتائج في كل مرة.')
    },
    {
      id: 4,
      title: text('Great Value', 'قيمة عظيمة'),
      desc: text('Our supplements offer great value for money, providing you with the highest quality ingredients at an affordable price.', 'تقدم مكملاتنا قيمة عظيمة للمال، حيث توفر لك أعلى جودة من المكونات بسعر معقول.')
    }
  ];
  

  return (
    <Box >
      <MainCarousel resImages={resImages}/>
      {/* <Perks/> */}

    <Grid  sx={{background:'#f4f8fd',width:'100%',py:8}} container>
    <Grid  maxWidth='lg' item xs={12} md={6}>
      <Box sx={{height:'500px',maxWidth:'450px'}} className='auto'>
        <img src="https://10web-site.ai/25/wp-content/uploads/sites/28/2023/09/recycled-shoe-store-home-about-image_cXRc9c18.webp" alt="" className="img" />
      </Box>
    </Grid>
    <Grid maxWidth='lg' item xs={12} md={6}>
    <Container  className='wrap col   auto flex' sx={{alignItems:'left',px:{sm:1},pt:{xs:2,sm:4},display:'flex'}}>
        <Typography sx={{fontWeight:400}} className='color2'>
        {text('ABOUT US', 'من نحن')}

        </Typography>
        <Typography sx={{width:'100%',maxWidth:'500px',fontSize:{xs:'2em',sm:'3em'},fontWeight:600}} className=''>
        {text('Welcome to True Natural Blend', 'مرحبًا في ترو ناتشور بليند')}

        </Typography>
        <Typography sx={{width:'100%',maxWidth:'500px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',mt:2}} className=''>
        {text('At Truenatureblend, we’re passionate about health and wellness. We believe in the power of nature, and that’s why we’ve created a range of natural supplements to help you live your best life. From ashwagandha to tongkat ali, we’ve got everything you need to feel your best.', 'في ترو ناشور بليند، نحن ملتزمون بالصحة والعافية. نحن نؤمن بقوة الطبيعة، وهذا هو السبب في أننا قمنا بإنشاء مجموعة من المكملات الطبيعية لمساعدتك على عيش حياتك بأفضل طريقة. من الأشواغاندا إلى تونجكات علي، لدينا كل ما تحتاجه لتشعر بأفضل حال.')}

        </Typography>
        <Btn v2 className='color' sx={{width:'100px',color:'black',mt:2,px:0}}>
        {text('Learn More', 'تعرف أكثر')}

        </Btn>
    </Container>

    </Grid>
    <Grid  maxWidth='lg' item xs={12} sx={{mt:{xs:8,sm:12}}}>
      <Typography sx={{fontSize:{xs:'2em',sm:'3em'},fontWeight:600}} className='center text-center auto color'>
      {text('Why Choose Truenatureblend?', 'لماذا تختار ترو ناشور بليند؟')}

      </Typography>
      <Typography sx={{width:'100%',maxWidth:'800px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',pt:1.5}} className='center text-center auto'>
      {text('Our supplements are made with only the finest natural ingredients, carefully selected for their purity and potency. Our products are free from harmful chemicals', 'مكملاتنا مصنوعة فقط من أرقى المكونات الطبيعية، تم اختيارها بعناية بسبب نقاوتها وفعاليتها. منتجاتنا خالية من المواد الكيميائية الضارة.')}

        </Typography>
    </Grid>
    <Grid  xs={12}  sx={{mt:4}}
    >
      <Container sx={{maxWidth:'lg'}} className='flex wrap row justify-between'>

      {textsArray.map(i=>{
        return <Box sx={{borderBottom:'1px solid white',width:{xs:'98%',sm:'200px',md:'48%'},maxWidth:'500px',mt:2.5}} key={i.id}>
          <Typography className='color3'>
            .0{i.id}
          </Typography>
          <Typography className='color2' sx={{fontSize:'1.4em',fontWeight:500}}>
            {i.title}
          </Typography>
          <Typography sx={{color:'#4d555e',fontSize:'.8em',pb:.65,maxWidth:'350px'}}>
            {i.desc}
          </Typography>
        </Box>
      })}
      </Container>

    </Grid>
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
    
      <HomeProductCollection  products={data?.featuredProducts}/>

        <Container sx={{pt:12,justifyContent:'space-between'}} className='flex row wrap space-between items-between' maxWidth='lg'>
      <Box className='relative flex center items-center ' sx={{mb:2, width:{xs:'100%',sm:'49%'},height:{xs:'350px',sm:'350px',md:'450px',lg:'45vw'}}}>
                  <img src="https://10web-site.ai/25/wp-content/uploads/sites/28/2023/09/recycled-shoe-store-shop-men-image-thumbnail_cXRc9c18.webp" alt="" className="img" />
                  <Box  className="absolute flex center auto items-center text-center col ">
                    <Typography className='center text-center' sx={{fontSize:'3em',textShadow:' #000000c',color:'white'}}>
                    {text('Organic Herbs', 'أعشاب عضوية')}

                    </Typography>
                    <Btn sx={{border:'none',mx:'auto'}}>
                    {text('SHOP NOW', 'تسوق الآن')}

                    </Btn>
                  </Box>
            </Box>
      <Box className='relative flex center items-center ' sx={{mb:2, width:{xs:'100%',sm:'49%'},height:{xs:'350px',sm:'350px',md:'450px',lg:'45vw'}}}>
                  <img src="https://10web-site.ai/25/wp-content/uploads/sites/28/2023/09/recycled-shoe-store-shop-women-image-tumbnail_cXRc9c18.webp" alt="" className="img" />
                  <Box  className="absolute flex center auto items-center col text-center">
                    <Typography className='center text-center' sx={{fontSize:'3em',textShadow:' #000000cc',color:'white'}}>{text('Organic Herbs', 'أعشاب عضوية')}
</Typography>
                    <Btn sx={{border:'none',mx:'auto'}}>
                    {text('SHOP NOW', 'تسوق الآن')}

                    </Btn>
                  </Box>
            </Box>
          
      </Container>

      {/* <HomeProductCollection  products={data}/> */}


      <Container  className='flex center wrap items-center row' sx={{py:5,my:8,mx:'auto',maxWidth:'lg',background:'#f4f8fd',}}>
        <Box>
        <Typography sx={{width:'100%',maxWidth:'600px',flex:1,fontSize:{xs:'.95em',sm:'1.19em'},fontWeight:300,color:'#4d555e',mt:2}} className=''>
            
        {text('At Truenatureblend, we’re committed to sustainability. That’s why we use eco-friendly packaging and support sustainable farming practices to ensure that our products have a minimal impact on the environment.', 'في ترو ناشور بليند، نحن ملتزمون بالاستدامة. لهذا السبب نستخدم تعبئة صديقة للبيئة وندعم ممارسات الزراعة المستدامة لضمان أن منتجاتنا لها تأثير أدنى على البيئة.')}

            </Typography>
        </Box>
        
        <Box sx={{ width:{xs:'200px',sm:'200px'},my:1}} className='auto rounded'>
          <img src="https://10web-site.ai/25/wp-content/uploads/sites/28/2023/09/recycled-shoe-store-recycled-circle-iamge_cXRc9c18.webp" alt="" className="img rounded" />
        </Box>
        </Container>       
    {/* <FullscreenPoster/> */}
    {/* <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(10,18)}/> */}
    {/* <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(18)}/> */}

    <Testimonials/>

    <Box sx={{my:8,height:'500px',overflow:'hidden'}} className='relative flex center items-center'>
      <Box className="absolute" sx={{width:'100%',height:'100%',top:0,right:0,background:'black',opacity:.5}}></Box>
      <Box sx={{maxWidth:'lg',px:1}} className="absolute center flex text-center col auto">
        <Typography sx={{fontSize:{xs:'2.5em',sm:'3em'},fontWeight:'600',color:'white'}}>
        {text('Our Mission', 'رسالتنا')}
        </Typography>
        <Typography sx={{fontSize:{xs:'.74em',sm:'.9em'},color:'white',maxWidth:'800px'}} className='auto'>
        {text('Our mission at Truenatureblend is to provide our customers with the highest quality natural supplements to support their health and wellness goals. We’re committed to sustainability and supporting the environment, and we believe in the power of nature to help us live our best lives.', 'مهمتنا في ترو ناشور بليند هي تقديم أعلى جودة من المكملات الطبيعية لدعم أهداف الصحة والعافية لعملائنا. نحن ملتزمون بالاستدامة ودعم البيئة، ونؤمن بقوة الطبيعة في مساعدتنا على عيش أفضل حياة.')}

        </Typography>
        <Btn sx={{mt:2,mx:'auto'}} v2>
        {text('Reach Us', 'تواصل معنا')}
      </Btn>
      </Box>
      <Box sx={{height:'100%',width:'100%'}}>
      <img src="https://10web-site.ai/25/wp-content/uploads/sites/28/2023/09/recycled-shoe-store-cta-image-bg_cXRc9c18.webp" alt="" className="img" />
 
      </Box>

      </Box>        

        
        <Perks></Perks>
        {/* <ContactSection/> */}
  </Box>
  )
}

export default PreLoader