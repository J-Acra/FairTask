"""empty message

Revision ID: fc5f47efd6a2
Revises: 76be87dd60d0
Create Date: 2022-06-04 18:37:02.385073

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fc5f47efd6a2'
down_revision = '76be87dd60d0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('application', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('interaction', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('interaction', 'application_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('note', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('note', 'application_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('note', 'application_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('note', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('interaction', 'application_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('interaction', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('application', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###
