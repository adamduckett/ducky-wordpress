<?php get_header(); ?>

	<?php if (have_posts()) : ?>

		<h2>Search Results</h2>

		<?php post_navigation(); ?>

		<?php while (have_posts()) : the_post(); ?>

			<article <?php post_class() ?> class="post-<?php the_ID(); ?>">

				<h2><?php the_title(); ?></h2>

				<?php posted_on(); ?>

				<div class="entry">

					<?php the_excerpt(); ?>

				</div>

			</article><!-- /post -->

		<?php endwhile; ?>

		<?php post_navigation(); ?>

	<?php else : ?>

		<h2>Nothing Found</h2>

	<?php endif; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
