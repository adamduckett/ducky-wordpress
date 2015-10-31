<?php get_header(); ?>

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<article <?php post_class() ?> class="post-<?php the_ID(); ?>">

			<h2><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h2>

			<?php posted_on(); ?>

			<div class="entry">
				<?php the_content(); ?>
			</div><!-- /entry -->

			<footer class="postmetadata">
				<?php the_tags(__('Tags: ','html5reset'), ', ', '<br />'); ?>
				<?php _e('Posted in','html5reset'); ?> <?php the_category(', ') ?> |
				<?php comments_popup_link(__('No Comments &#187;','html5reset'), __('1 Comment &#187;','html5reset'), __('% Comments &#187;','html5reset')); ?>
			</footer><!-- /postmetadata -->

		</article><!-- /post -->

	<?php endwhile; ?>

	<?php post_navigation(); ?>

	<?php else : ?>

		<h2>Nothing Found</h2>

	<?php endif; ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
