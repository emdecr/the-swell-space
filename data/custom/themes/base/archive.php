<?php get_header(); ?>

<section>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <p>Archive Page</p>
    <?php endwhile; else : ?>
        <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
    <?php endif; ?>
</section>


<?php get_footer(); ?>